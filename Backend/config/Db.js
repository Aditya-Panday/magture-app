const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectionURI = process.env.IS_LOCAL_DB 

const connectToMongo = async () => {
    try {
        await mongoose.connect(connectionURI)
        console.log("Connected to MongoDB successfully");

    } catch (error) {
        console.error("Database connection Failed", error);
    }
};

module.exports = connectToMongo;