import mongoose from "mongoose";
const facultySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },

  employeeId: {
    type: String,
    required: true,
    unique: true,
  },

  department: {
    type: String,
    required: true,
  },

  designation: {
    type: String,
    enum: ['teacher', 'hod', 'principal'],
    required: true,
  },

  qualifications: {
    type: [String], // e.g., ["M.Tech", "PhD"]
    default: [],
  },

  subjects: {
    type: [String], // List of subject names or codes
    default: [],
  },

  experience: {
    type: Number, // in years
    default: 0,
  },

  phone: {
    type: String,
    required: true,
  },

  address: {
    type: String,
  },

  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Faculty', facultySchema);