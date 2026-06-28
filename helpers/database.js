const mongoose = require("mongoose");

const connectDB = () => {
  const uri = process.env.AZURE_COSMOS_CONNECTIONSTRING || process.env.MONGO_DB_URL;
  mongoose
    .connect(uri)
    .then(() => console.log("Database Connected"))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectDB;
