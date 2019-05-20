/* This will run main server and connect to the database.*/

const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
const app = require('./app')

const server = express();

var db = 'mongodb+srv://khayrul123:khayrul123@cluster0-6kqzz.mongodb.net/test?retryWrites=true/test';


mongoose.connect(db, { useNewUrlParser: true });

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended:true,
}));

server.use('', app);

const port = 4444;
server.listen(port, function(){
    console.log('app listening on port ' + port);
});