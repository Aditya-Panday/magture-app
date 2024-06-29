const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const BLOGS = mongoose.model("BLOGS");

router.post('/save', async (req, res) => {
    try {
        const { name, imgurl, introtext, author, metadescription, metatitle, metakeyword, content, category } = req.body;
        // Create a new instance of COMMON model
        const newBlogsData = new BLOGS({
            name,
            imgurl,
            introtext,
            author,
            metadescription,
            metatitle,
            metakeyword,
            content,
            category
        });

        // Save the new data to MongoDB
        await newBlogsData.save();

        res.status(201).json({ message: 'Blogs Created successfully' });
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
        const deletedBlogData = await BLOGS.findByIdAndDelete(id);

        if (!deletedBlogData) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Error deleting banner data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
router.get('/dt', async (req, res) => {
    try {
        const BlogData = await BLOGS.find();
        res.json(BlogData);
    } catch (error) {
        console.error('Error fetching blog data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
module.exports = router;
