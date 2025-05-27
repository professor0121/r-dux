import User from '../models/userModel.js';
import Student from '../models/studentModel.js';
import Faculty from '../models/facultiModel.js';


export const registerController = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
      department,
      enrollmentNumber,
      employeeId,
      phone,
      address
    } = req.body;

    console.log(req.body);

    if (role === 'principal') {
      return res.status(403).json({ message: 'Principal cannot register via this route' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create user
    const user = new User({
      name,
      email,
      password,
      role,
      status: 'pending',
    });

    await user.save();

    // Create profile
    if (role === 'student') {
      await Student.create({
        user: user._id,
        name,
        enrollmentNumber,
        course: department,
        semester: 1,
        phone,
        address
      });
    } else if (role === 'teacher' || role === 'hod') {
      await Faculty.create({
        user: user._id,
        name,
        employeeId,
        department,
        designation: role,
        phone,
        address
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



export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    if (user.status !== 'approved') {
      return res.status(403).json({ message: 'User not approved yet' });
    }

    // Save user info in session
    req.session.user = {
      id: user._id,
      role: user.role,
      name: user.name,
      email: user.email,
    };

    res.json({ message: 'Login successful',user: req.session.user, token: user.generateJWT() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


export const logOutController = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.clearCookie('connect.sid'); 
    res.json({ message: 'Logged out successfully' });
  });
};
