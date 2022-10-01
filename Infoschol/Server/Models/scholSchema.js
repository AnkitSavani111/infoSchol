const mongoose = require('mongoose');

const scholSchema = mongoose.Schema({
    name:{
        type:String,
        required : true,
    },
    award:{
        type:String,
        required : true,
    },
    type:{
        type:String,
        required : true,
    },
    image:{
        type:String,
        required : true,
    },
    cast:{
        type:String,
        required : true,
    },
    education:{
        type:String,
        required : true,
    },
    income:{
        type:String,
        required : true,
    },
    documents:{
        type:String,
        required : true,
    },
    stepstoapply:{
        type:String,
        required : true,
    },
    about:{
        type:String,
        required : true,
    },
    website:{
        type:String,
        required:true,
    },
});

const Scholerships = new mongoose.model("SCHOLARSHIPS",scholSchema);
module.exports = Scholerships;