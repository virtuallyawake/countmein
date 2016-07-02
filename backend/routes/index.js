var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/event', function(req, res) {
  console.dir(req.body);
  res.send({
    status: success,
    data: "data"
  });
});

module.exports = router;
