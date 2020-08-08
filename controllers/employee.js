var express = require('express');
var router = express.Router();

var DB=require('../db');
var employees=DB();

router.get('/', function(req, res){
    res.render('employee/index');
});

router.get('/myProfile', function(req, res){
    var data=employees.getAllEmp()[0];
    res.render('employee/profile',data);
});

router.get('/updateProfile', function(req, res){
    var data=employees.getAllEmp()[0];
    res.render('employee/update',data);
});

router.post('/updateProfile', function(req, res){
    var data=req.body;
    employees.updateEmp(data);
    res.redirect('/employee/myProfile');
});




module.exports = router;
