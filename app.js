
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var dashboardRouter = require('./routes/dashboard');
var addNewCateRouter = require('./routes/add-new-category');
var ViewPassCateRouter = require('./routes/passwordCategory');
var roomidsRouter = require('./routes/roomids');
var teacherRouter = require('./routes/teacher');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'))





  





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.get('/room/:id', (req, res) => {
    var abcd = req.params.id;
    res.redirect('/passwordCategory/'+abcd)
  })
  app.get('/passwordCategory/:id', (req, res) => {
    var id = req.params.id;
    if(id){
    res.redirect('/abc/'+id)
    }else{
      res.render('abcdefg')
    }
  })
  app.get('/abc/:id',function(req, res, next) {
    res.redirect('/abc')
  })
  app.get('/abc',function(req, res, next) {
    res.render('room', {roomId: req.params.id});
});


/*app.get('/room/:id', (req, res) => {
  var abcd = 5;
  res.redirect('/passwordCategory/'+abcd)
})
app.get('/passwordCategory/:id', (req, res) => {
  var id = req.params.id;
  if(id==5){
  res.redirect('/abc')
  }else{
    res.render('abcdefg')
  }
})

app.get('/abc',function(req, res, next) {
  res.render('room', {roomId: req.params.id});
});*/

app.use('/', indexRouter);
app.use('/dashboard', dashboardRouter);
app.use('/teacher', teacherRouter);
app.use('/roomids', roomidsRouter);
app.use('/add-new-category', addNewCateRouter);
app.use('/passwordCategory', ViewPassCateRouter);

module.exports = app;