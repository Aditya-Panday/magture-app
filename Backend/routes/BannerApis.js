const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const BANNER = mongoose.model("BANNER");

router.post('/save', async (req, res) => {
    try {
        const { name, imgurl, description } = req.body;

        // Create a new instance of COMMON model
        const newBannerData = new BANNER({
            name,
            imgurl,
            description
        });

        // Save the new data to MongoDB
        await newBannerData.save();

        res.status(201).json({ message: 'Banner Created successfully' });
    } catch (error) {
        console.error('Error saving banner data:', error);
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
        const deletedBannerData = await BANNER.findByIdAndDelete(id);

        if (!deletedBannerData) {
            return res.status(404).json({ error: 'Banner not found' });
        }

        res.json({ message: 'Banner deleted successfully' });
    } catch (error) {
        console.error('Error deleting banner data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
router.put('/edit/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Check if the ID is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID' });
        }

        // Find the document by ID
        const banner = await BANNER.findById(id);

        if (!banner) {
            return res.status(404).json({ error: 'Banner not found' });
        }

        // Toggle status based on current value
        banner.status = banner.status === 'active' ? 'inactive' : 'active';
        banner.updatedDate = Date.now();

        // Save the updated banner document
        await banner.save();

        res.json({ message: 'Banner status updated successfully', banner });
    } catch (error) {
        console.error('Error toggling banner status:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
router.put('/cdn/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
        // Check if the ID is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID' });
        }

        // Find the document by ID
        const banner = await BANNER.findById(id);

        if (!banner) {
            return res.status(404).json({ error: 'Banner not found' });
        }

        if (name) {
            banner.name = name;
        }
        if (description) {
            banner.description = description;
        }

        // Save the updated banner document
        await banner.save();

        res.json({ message: 'Banner  updated successfully' });
    } catch (error) {
        console.error('Error banner status:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
router.get('/dt', async (req, res) => {
    try {
        const BannerData = await BANNER.find();
        res.json(BannerData);
    } catch (error) {
        console.error('Error fetching banner data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
module.exports = router;
