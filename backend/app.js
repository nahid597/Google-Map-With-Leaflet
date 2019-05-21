const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
const workers = require('./routers/workers');
const users = require('./routers/users');
 const cors = require('cors');

const app = express();
