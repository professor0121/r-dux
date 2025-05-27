import dotenv from 'dotenv';
dotenv.config();

import User from '../models/userModel.js';
import Faculty from '../models/facultiModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';




export const principalRegister = async (req, res) => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const adminPhone = process.env.ADMIN_PHONE || '0000000000';
    const adminAddress = process.env.ADMIN_ADDRESS || '';

    if (!adminEmail || !adminPassword) {
      return res.status(500).json({ message: 'Admin credentials not configured in env' });
    }

    let principalUser = await User.findOne({ role: 'principal' });

    if (principalUser) {
      // Update email & password (without hashing here)
      principalUser.email = adminEmail;
      principalUser.password = adminPassword;
      await principalUser.save();
    } else {
      // Create new principal user (password is plain text)
      principalUser = new User({
        name: 'Principal',
        email: adminEmail,
        password: adminPassword,
        role: 'principal',
        status: 'approved',
      });
      await principalUser.save();
    }

    // Create/update Faculty record
    let principalFaculty = await Faculty.findOne({ user: principalUser._id });

    if (principalFaculty) {
      principalFaculty.employeeId = 'ADMIN001';
      principalFaculty.department = 'Administration';
      principalFaculty.phone = adminPhone;
      principalFaculty.address = adminAddress;
      principalFaculty.designation = 'principal';
      await principalFaculty.save();
    } else {
      principalFaculty = new Faculty({
        user: principalUser._id,
        employeeId: 'ADMIN001',
        department: 'Administration',
        phone: adminPhone,
        address: adminAddress,
        designation: 'principal',
      });
      await principalFaculty.save();
    }

    res.status(200).json({ message: 'Principal registered or updated successfully' });

  } catch (error) {
    console.error('Principal registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


export const loginPrincipal = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email, role: 'principal' });
    console.log('Login attempt for:',user);
    if (!user) {
      return res.status(404).json({ message: 'Principal not found' });
    }

    // Verify password
    console.log(password, user.password);
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};