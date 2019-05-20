const express = require('express');
const router = express.Router();
const workers = require('./routers/workers');
const users = require('./routers/users')

router.use('/admin/workers', workers);
router.use('/admin/users', users);

module.exports = router;
