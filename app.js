var express 	= require('express');
var bodyParser 	= require('body-parser');
var login 		= require('./controllers/login');
var admin 		= require('./controllers/admin');
var logout 		= require('./controllers/logout');
var employee    = require('./controllers/employee');
var app 		= express();

//config
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser());
app.use('/login', login);
app.use('/logout', logout);
app.use('/admin', admin);
app.use('/employee',employee);

app.get('/', function(req, res){
    res.send("this is index page!<br> <a href='/login'> login</a> ");
});

app.listen(3000,function () {
console.log("Server started at port 3000....");
});
