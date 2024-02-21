const mongoose = require("mongoose");

const connectDb = async () => {
  const DB_URL = process.env.DB_URL;
  try {
    const connect = await mongoose.connect(DB_URL);
    console.log("Database connected successfully.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
