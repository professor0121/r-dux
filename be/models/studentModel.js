import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },

  enrollmentNumber: {
    type: String,
    required: true,
    unique: true,
  },

  course: {
    type: String,
    required: true,
  },

  semester: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },

  guardianName: {
    type: String,
    required: false,
  },

  address: {
    type: String,
  },

  phone: {
    type: String,
    required: true,
  },

  attendance: [
    {
      date: Date,
      status: {
        type: String,
        enum: ['present', 'absent'],
        default: 'absent',
      },
    },
  ],

  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Student', studentSchema);
