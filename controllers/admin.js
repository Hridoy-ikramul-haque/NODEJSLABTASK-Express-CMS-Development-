var express = require('express');
var router = express.Router();
var DB=require('../db');

var employees=DB();

router.get('/', function(req, res){
	res.render('admin/index');
});

router.get('/addEmployee', function(req, res){
	res.render('admin/addEmp');
});
router.get('/allEmployeeList', function(req, res){
	var allEmployees=employees.getAllEmp();
	var data={allEmpList: allEmployees}
	//console.log(allEmployees);
	res.render('admin/allEmpList',data);
});
router.post('/addEmployee', function(req, res){
	employees.createEmp(req.body);
	res.redirect('/admin/allEmployeeList');
});
router.get('/delete/:id',function (req,res) {
	employees.deleteEmp(req.params.id);
	///console.log(req.url.id);
	res.redirect('/admin/allEmployeeList');
});
router.get('/update/:id',function (req,res) {
	var id = req.params.id;
	var data=employees.getEmp(id);
	//console.log(data);
	res.render('admin/update',data);
});
router.post('/update/:id',function (req,res) {
	var data=req.body;
	data.id=req.params.id;
	employees.updateEmp(data);
	//console.log(data);
	res.redirect('/admin/allEmployeeList');
});


module.exports = router;
