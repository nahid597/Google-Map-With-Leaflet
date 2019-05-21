const express = require('express');
const router = express.Router();
const Worker = require('../models/worker.model');
const operation = require('../operation/operation');


router.get('', function(req, res){
    operation.findInf(res, Worker, req.query);
});

router.post('', function(req, res){

    var newWorker = new Worker();

    for(var key in req.body)
        newWorker[key] = req.body[key];

    operation.insertData(res, newWorker);
});

router.delete('', function(req, res){
    operation.deleteData(res, Worker, req.query);
});



module.exports = router;
