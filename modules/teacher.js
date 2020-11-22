const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abhishek_dhakad:Aa1Bb2Hh3@cluster0.fxygu.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true,});
var conn =mongoose.Collection;
var teacherSchema =new mongoose.Schema({
    teachername: {type:String, 
        required: true,
        index: {
            unique: true,        
        }},

	class: {
        type:Number, 
        required: true,
        index: {
            unique: true, 
        },},
    subject: {
        type:String, 
        required: true,
        index: {
        unique: true, 
        },},
    
    
    date:{
        type: Date, 
        default: Date.now }
});

var teacherModel = mongoose.model('teacher', teacherSchema);
module.exports=teacherModel;

//'mongodb+srv://abhishek_dhakad:Aa1Bb2Hh3@cluster0.fxygu.mongodb.net/<dbname>?retryWrites=true&w=majority'