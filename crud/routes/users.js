var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('users', { title: 'Users' });
});

router.get('/api/user', (req, res, next) => {
  let jsonPath = path.join(__dirname, '../json/users.json');
  res.sendFile(jsonPath);
});

router.post('/api/user/:id', (req, res, next) => {
  console.log(req.params.id);
  console.log(req.body);
  res.json({ message: 'ok' });
});

router.delete('/api/user/:id', (req, res, next) => {
  console.log(req.params.id);
  deleteUser(req.params.id);
  res.json({ message: 'ok' });
});

router.put('/api/user/:id', (req, res, next) => {
  res.json({ message: 'ok' });
});

let deleteUser = async (userId) => {
  let jsonPath = path.join(__dirname, '../json/users.json');
  let jsonFile = await readJson(jsonPath);
  let json = JSON.parse(jsonFile);
  json.splice(userId-1, 1);
  let newJson = JSON.stringify(json, null,2);
  await writeJson(jsonPath, newJson);
}

const readJson = (filePath, encode = 'utf8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encode, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};

const writeJson = (filePath, encode = 'utf8', data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, encode, data, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};

module.exports = router;