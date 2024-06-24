const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
require('dotenv').config()
const jwt = require("jsonwebtoken")
const Secret_Key = process.env.Jwt_secret
const bcrypt = require('bcryptjs');
const USER = mongoose.model("USER");

router.post('/signup', async (req, res) => {
    const { email, password, home, commonsetting, banner, pages, blogs, leads } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: 'Please enter email and password' });
    }
    try {
        // Check if the user already exists
        const existingUser = await USER.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const otp = Math.floor(100000 + Math.random() * 900000);

        // Create a new user
        const newUser = new USER({ email, password: hashedPassword, otp, home, commonsetting, banner, pages, blogs, leads });
        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'Registered successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "Please add email and password" });
    }

    USER.findOne({ email: email }).then((savedUser) => {
        if (!savedUser) {
            return res.status(422).json({ error: "Invalid email" });
        }
        bcrypt.compare(password, savedUser.password).then((match) => {
            if (match) {
                const token = jwt.sign({ _id: savedUser.id }, Secret_Key);
                const { _id, email, Role, home, commonsetting, banner, pages, blogs, leads } = savedUser; // Include Role here

                res.json({ token, user: { _id, email, Role, home, commonsetting, banner, pages, blogs, leads } }); // Include Role in response
            } else {
                return res.status(422).json({ error: "Invalid password" });
            }
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
});

router.put('/edituser/:id', async (req, res) => {
    const { id } = req.params;
    const { home, commonsetting, banner, pages, blogs, leads } = req.body;

    try {
        // Find the user by ID
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID' });
        }
        const user = await USER.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        // Update user details
        if (home !== undefined) user.home = home;
        if (commonsetting !== undefined) user.commonsetting = commonsetting;
        if (banner !== undefined) user.banner = banner;
        if (pages !== undefined) user.pages = pages;
        if (blogs !== undefined) user.blogs = blogs;
        if (leads !== undefined) user.leads = leads;

        // Save updated user
        await user.save();

        res.json({ message: 'User details updated' });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Check if the ID is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID' });
        }
        const deleteUser = await USER.findByIdAndDelete(id);
        if (!deleteUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/users', async (req, res) => {
    try {
        // Fetch all data from HOME model
        const UserData = await USER.find().select('-otp -password');
        res.json(UserData);

    } catch (error) {
        console.error('Error fetching users data:', error);
        res.status(500).json({ error: 'Server error' });
    }
})
module.exports = router;