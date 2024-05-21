const express = require("express");
const dbConnection = require("../database/database");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
dbConnection();
app.use(express.json());
app.listen(port, () => {
  console.log(`SERVER RUNING ON http://localhost:${port}`);
});
