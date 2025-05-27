import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'teacher', 'hod', 'principal'], required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'approved' },
  createdAt: { type: Date, default: Date.now },
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Generate JWT method
userSchema.methods.generateJWT = function () {
  const payload = { userId: this._id, role: this.role };
  return jwt.sign(payload, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1d' });
};

 export default mongoose.model('User', userSchema);
