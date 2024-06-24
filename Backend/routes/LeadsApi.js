const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const LEADS = mongoose.model("LEADS"); // Make sure "COMMON" matches your actual model name

router.post('/save', async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        // Create a new instance of COMMON model
        const newLeadsData = new LEADS({
            name,
            email,
            phone
        });
        // Save the new data to MongoDB
        await newLeadsData.save();

        res.status(201).json({ message: 'Leads saved successfully' });
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
        const deletedLeadsData = await LEADS.findByIdAndDelete(id);

        if (!deletedLeadsData) {
            return res.status(404).json({ error: 'Leads not found' });
        }
        res.json({ message: 'Leads deleted successfully' });
    } catch (error) {
        console.error('Error deleting Banner data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
router.get('/dt', async (req, res) => {
    try {
        const LeadsData = await LEADS.find();
        res.json(LeadsData);
    } catch (error) {
        console.error('Error fetching leads data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
module.exports = router;
