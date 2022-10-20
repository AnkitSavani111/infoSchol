const express = require('express');
const cors = require('cors');
require("dotenv").config();
const app = express();
require('./Database/connection');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./Routers/GetRouters')(app);
require('./Routers/PostRouters')(app);
app.listen(process.env.PORT, () => {
    console.log("Server is listening");
});