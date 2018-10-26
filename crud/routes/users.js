var express = require('express');
var router = express.Router();
const path = require('path');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('users', { title: 'Users' });
});

router.get('/api/user', (req, res, next) => {
  let jsonPath = path.join(__dirname, '../json/users.json');
  res.sendFile(jsonPath);
});

module.exports = router;