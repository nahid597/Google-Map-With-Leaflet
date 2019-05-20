
//Find data from a database
function findInf(res, model, query){
    model.find(query)
        .exec(function(err, data){
            if(err) 
                res.status(404).json(err.errmsg);
            else
                res.status(200).json(data);
        });
}

//Insert into a database
function insertData(res, model){
    model.save(function(err){
        if(err)
            res.status(500).json('Error');
        else
            res.status(200).json('Inserted');
    });
}

//Delete data from database
function deleteData(res, model, query){
    model.remove(query, function(err){
        if(err)
            res.status(500).json(err.errmsg);

        else 
            res.status(200).json('deleted');
    });
}

module.exports = {findInf, insertData, deleteData};