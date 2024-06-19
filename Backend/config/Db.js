const mongoose = require("mongoose");

const connectionURI = process.env.MONGO_URI

const connectToMongo = async () => {
    try {
        await mongoose.connect(connectionURI)
        console.log("Connected to MongoDB successfully");

    } catch (error) {
        console.error("Database connection Failed", error);
    }
};

module.exports = connectToMongo;