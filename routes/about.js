var express = require('express');
var router = express.Router();

/* GET about listing. */
router.get('/', function(req, res, next) {
    res.send('My first route works!');
});

module.exports = router;