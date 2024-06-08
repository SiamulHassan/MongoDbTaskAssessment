const mongoose = require("mongoose");
const dbConnection = () =>
  mongoose.connect(process.env.DB).then(() => console.log("DB Connected!"));

module.exports = dbConnection;
