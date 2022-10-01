const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://21ce117:25022004@cluster0.stxuuvy.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("connected sucessfully");
    }).catch((e) => {
        console.log(e);
    });