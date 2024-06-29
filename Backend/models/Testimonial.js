const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    imgurl: {
        type: String,
    },
    rating: {
        type: String,
    },
    description: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model("TESTIMONIAL", testimonialSchema);
