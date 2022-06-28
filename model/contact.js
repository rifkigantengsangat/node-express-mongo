const mongoose = require('mongoose')
const { Schema } = mongoose;
mongoose.connect('mongodb://127.0.0.1:27017/rifki');

const contactschema = new Schema({
    nama : String,
    email : String,
    password : String
    
},{timeStamp: true})
const Contact = mongoose.model("user",contactschema);
module.exports = Contact;
