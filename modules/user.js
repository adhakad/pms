const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abhishek_dhakad:Aa1Bb2Hh3@cluster0.fxygu.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true,});
var conn =mongoose.Collection;
var userSchema =new mongoose.Schema({
    username: {type:String, 
        required: true,
        index: {
            unique: true,        
        }},

	email: {
        type:String, 
        required: true,
        index: {
            unique: true, 
        },},
    password: {
        type:String, 
        required: true
    },
    roomid: {
        type:String, 
        required: true,
        index: {
            unique: true, 
        },},
    date:{
        type: Date, 
        default: Date.now }
});

var userModel = mongoose.model('users', userSchema);
module.exports=userModel;

//'mongodb+srv://abhishek_dhakad:Aa1Bb2Hh3@cluster0.fxygu.mongodb.net/<dbname>?retryWrites=true&w=majority'