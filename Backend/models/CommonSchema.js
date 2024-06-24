const mongoose = require("mongoose");

const comSchema = new mongoose.Schema({
    imgurl: {
        type: String,
    },
    phone: {
        type: Number,
    },
    description: {
        type: String,
    },
    title: {
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

mongoose.model("COMMON", comSchema);
