var express = require('express');
var router = express.Router();
// var Toast = require('../src/js/module/toast.js').Toast;
/* GET home page. */
router.get('/', function(req, res, next) {
  var data;
  if(req.session.user){
    data = {
      isLogin: true,
      user: req.session.user
    }
  }else{
    data = {
      isLogin: false
    }
  }
  res.render('index', data);
});

module.exports = router;