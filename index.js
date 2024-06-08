require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./dbConfig/mongDbConfig");
const router = require("./route");

///////////////// DB CONNECTION
dbConnection();

//////////////// APP
const app = express();
app.use(cors());
app.use(express.json());

////////////////// ROUTER
app.use(process.env.BASE_URL, router);
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`app is running on port ${port}`));
