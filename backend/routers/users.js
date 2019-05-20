const express = require('express');
const router = express.Router();
const Users = require('../models/user.model');
const operation = require('../operation/operation');


router.get('', function(req, res){
    operation.findInf(res, Users, req.query);
});

router.post('', function(req, res){

    var newNewUsers = new Users();

    newNewUsers.Name = req.body.Name;
    newNewUsers.Phone = req.body.Phone;
    newNewUsers.Password = req.body.Password;

    operation.insertData(res, newNewUsers);
});

router.delete('', function(req, res){
    operation.deleteData(res, Users, req.query);
});

module.exports = router;
