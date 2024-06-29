const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const CATEGORY = mongoose.model("CATEGORY");

router.post('/save', async (req, res) => {
    try {
        const { category } = req.body;
        // Create a new instance of COMMON model
        const newCategoryData = new CATEGORY({
            category
        });

        // Save the new data to MongoDB
        await newCategoryData.save();

        res.status(201).json({ message: 'Category Created successfully' });
    } catch (error) {
        console.error('Error saving blogs data:', error);
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
        const deletedCategoryData = await CATEGORY.findByIdAndDelete(id);

        if (!deletedCategoryData) {
            return res.status(404).json({ error: 'Category not found' });
        }

        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error('Error deleting category data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/dt', async (req, res) => {
    try {
        const CategoryData = await CATEGORY.find();
        res.json(CategoryData);
    } catch (error) {
        console.error('Error fetching category data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;