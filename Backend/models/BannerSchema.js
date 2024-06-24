const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    imgurl: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        default: "active",
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    updatedDate: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model("BANNER", bannerSchema);
