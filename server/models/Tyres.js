const mongoose = require ('mongoose');

const TyresSchema = new mongoose.Schema({
    Brand :
    {
        type: String,
        required: true,
    },
    Title:
    {
        type: String,
        required: true,
    },
    Size:
    {
        type: Number,
        required: true,
    },
    Price:
    {
        type: Number,
        required: true,
    },
    Image:
    {
        type: String,
        required: true,
    }
});

const Tyres = mongoose.model("tyrecollections", TyresSchema)
module.exports = Tyres;
