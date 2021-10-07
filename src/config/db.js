const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const ConnectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO_ATLAS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected MongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1); // Detiene la app
  }
};

module.exports = ConnectDatabase;
