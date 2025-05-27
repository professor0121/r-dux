import User from '../models/userModel.js';
import Student from '../models/studentModel.js';
import Faculty from '../models/facultiModel.js';

export const registerController = async (req, res) => {
  try {
    const { name, email, password, role, department, enrollmentNumber, employeeId } = req.body;

    if (role === 'principal') {
      return res.status(403).json({ message: 'Principal cannot register via this route' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create user (password hashing handled in model pre-save hook)
    const user = new User({
      name,
      email,
      password,
      role,
      status: 'pending', // default, but explicitly setting for clarity
    });

    await user.save();

    // Create related profile based on role
    if (role === 'student') {
      await Student.create({
        user: user._id,
        enrollmentNumber,
        course: department,
        semester: 1,
      });
    } else if (role === 'teacher' || role === 'hod') {
      await Faculty.create({
        user: user._id,
        employeeId,
        department,
        designation: role,
      });
    } else {
      return res.status(400).json({ message: 'Invalid role' });
    }

    res.status(201).json({ message: 'Registration successful. Awaiting approval.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
