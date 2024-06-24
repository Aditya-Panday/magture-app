const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
    heading: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    keyword: {
        type: String,
    },
    content: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model("HOME", homeSchema);
