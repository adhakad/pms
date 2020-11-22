var express = require('express');
var router = express.Router();
var teacherMoale=require('../modules/teacher');



const { check, validationResult } = require('express-validator');




router.get('/', function(req, res, next) {
  
  res.render('teacher', { title: 'Teacher Details',msg:'' });
  
});
router.post('/',function(req, res, next) {
        var teachername=req.body.tname;
        var classname=req.body.class;
        var subjectname=req.body.subject;
        
        var userDetails=new teacherMoale({
          teachername:teachername,
          class:classname,
          subject:subjectname,
          
        });
     userDetails.save((err,doc)=>{
        if(err) throw err;
        res.render('teacher', { title: 'Teacher Details', msg:'Teacher Details Insert Successfully' });
     }); 

  
});


module.exports = router;
