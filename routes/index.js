// var express = require('express');
// var router = express.Router();

const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');


router.get('/', postsController.index);
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
