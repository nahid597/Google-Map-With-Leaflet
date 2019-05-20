const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
const workers = require('./routers/workers');
const users = require('./routers/users');
 const cors = require('cors');

const app = express();

var db = 'mongodb+srv://khayrul123:khayrul123@cluster0-6kqzz.mongodb.net/test?retryWrites=true/test';

mongoose.connect(db);

// for handling cros policy....

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    res.setHeader("Access-Control-Allow-Methods",
        "GET,POST, PATCH, PUT, DELETE, OPTIONS");

    next();
});


// end here cross policy

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
}));
 

app.use('/admin', workers);
app.use('/admin', users);

app.get('/', function(req, res){
    res.send('Hello World!');
});


const port = 4444;
app.listen(port, function(){
    console.log('app listening on port ' + port);
});