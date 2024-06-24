const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
require('dotenv').config()
const HOME = mongoose.model("HOME");


router.post('/home', async (req, res) => {
    try {
        const { heading, title, description, content, keyword } = req.body;

        // Create a new instance of HOME model
        const newHomeData = new HOME({
            heading,
            title,
            description,
            keyword,
            content
        });

        // Save the new data to MongoDB
        await newHomeData.save();

        res.status(201).json({ message: 'Home data saved successfully' });
    } catch (error) {
        console.error('Error saving home data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/home/dt', async (req, res) => {
    try {
        // Fetch all data from HOME model
        const homeData = await HOME.find();

        res.json(homeData); // Send the fetched data as JSON response
    } catch (error) {
        console.error('Error fetching home data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
router.delete('/home/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Check if the ID is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID' });
        }

        // Find the document by ID and delete it
        const deletedHomeData = await HOME.findByIdAndDelete(id);

        if (!deletedHomeData) {
            return res.status(404).json({ error: 'Home data not found' });
        }

        res.json({ message: 'Home data deleted successfully' });
    } catch (error) {
        console.error('Error deleting home data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});


module.exports = router;