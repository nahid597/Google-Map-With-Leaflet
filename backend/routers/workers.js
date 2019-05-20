const express = require('express');
const router = express.Router();
const Worker = require('../models/worker.model');


router.get('/workers', function(req, res){
    Worker.find(req.query)
        .exec(function(err, workers){
            if(err) 
                res.status(404).json(err.errmsg);
            else
                res.status(200).json(workers);
        });
});

router.post('/workers', function(req, res){

    var newWorker = new Worker();

    newWorker.Name = req.body.Name;
    newWorker.Phone = req.body.Phone;
    newWorker.Password = req.body.Password;
    newWorker.Catagory = req.body.Catagory;

    newWorker.save(function(err, worker){
        if(err)
            res.status(500).json(err.errmsg);
        else
            res.status(200).json('Inserted');
    });
});

router.delete('/workers', function(req, res){
    Worker.remove(req.query, function(err){
        if(err)
            res.status(500).json(err.errmsg);

        else 
            res.status(200).json('deleted');
    });
});



module.exports = router;