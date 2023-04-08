const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require('dotenv')
dotenv.config()
const connectDB = async () => {
  try {
    const MONGO_URI = 'mongodb+srv://EddieChege:K2G4Tzs1qvjJ0GvP@cluster0.3rqomdf.mongodb.net/?retryWrites=true&w=majority'
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
