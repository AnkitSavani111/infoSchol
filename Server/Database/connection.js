require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("connected sucessfully");
    }).catch((e) => {
        console.log(e);
    });