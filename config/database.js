const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async () => {
    try {
        console.log("MongoDB URL:", process.env.MONGODB_URL);
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB connected successfully");
    } catch (err) {
        console.error("DB CONNECTION ISSUES");
        console.error(err.message || err);
        process.exit(1);
    }
};
