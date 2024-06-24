const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const COMMON = mongoose.model("COMMON"); // Make sure "COMMON" matches your actual model name

// POST route to save common data
router.post('/save', async (req, res) => {
    try {
        const { imgurl, phone, description, content, title } = req.body;

        // Create a new instance of COMMON model
        const newCommonData = new COMMON({
            imgurl,
            phone,
            description,
            content,
            title
        });

        // Save the new data to MongoDB
        await newCommonData.save();

        res.status(201).json({ message: 'Common data saved successfully' });
    } catch (error) {
        console.error('Error saving common data:', error);
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

        // Find the document by ID and delete it
        const deletedCommonData = await COMMON.findByIdAndDelete(id);

        if (!deletedCommonData) {
            return res.status(404).json({ error: 'Common data not found' });
        }

        res.json({ message: 'Common data deleted successfully' });
    } catch (error) {
        console.error('Error deleting home data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
router.get('/dt', async (req, res) => {
    try {
        // Fetch all data from HOME model
        const CommonData = await COMMON.find();

        res.json(CommonData); 
    } catch (error) {
        console.error('Error fetching home data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;

