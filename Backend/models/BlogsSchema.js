const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    imgurl: {
        type: String,
    },
    introtext: {
        type: String,
    },
    author: {
        type: String,
    },
    content: {
        type: String,
    },
    metatitle: {
        type: String,
    },
    metakeyword: {
        type: String,
    },
    metadescription: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model("BLOGS", blogSchema);
