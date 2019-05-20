const express = require('express');
const router = express.Router();
const Worker = require('../models/worker.model');
const operation = require('../operation/operation');


router.get('', function(req, res){
    operation.findInf(res, Worker, req.query);
});

router.post('', function(req, res){

    var newWorker = new Worker();

    newWorker.Name = req.body.Name;
    newWorker.Mobile = req.body.Mobile;
    newWorker.Password = req.body.Password;
    newWorker.Catagory = req.body.Catagory;

    operation.insertData(res, newWorker);
});

router.delete('', function(req, res){
    operation.deleteData(res, Worker, req.query);
});



module.exports = router;