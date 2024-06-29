const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const TESTIMONIAL = mongoose.model("TESTIMONIAL");

router.post('/save', async (req, res) => {
    try {
        const { name, imgurl, rating, description } = req.body;
        const newTestimonialData = new TESTIMONIAL({
            name, imgurl, rating, description
        });

        await newTestimonialData.save();
        res.status(201).json({ message: 'Testimonial Created successfully' });
    } catch (error) {
        console.error('Error saving testimonial data:', error);
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
        const deletedtestimonialData = await TESTIMONIAL.findByIdAndDelete(id);
        if (!deletedtestimonialData) {
            return res.status(404).json({ error: 'Testimonial not found' });
        }
        res.json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
        console.error('Error deleting testimonial data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/dt', async (req, res) => {
    try {
        const TestimonialData = await TESTIMONIAL.find();
        res.json(TestimonialData);
    } catch (error) {
        console.error('Error fetching testimonial data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;