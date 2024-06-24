const mongoose = require("mongoose");

const leadsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model("LEADS", leadsSchema);
