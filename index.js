const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('NodeJS response');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post('/login', (req, res) => {
  var user_name = req.body.user;
  var password = req.body.password;
  res.status(200).json({
    res_code: 200,
    status: 'success',
    user_name: req.body.user,
    password: req.body.password
  });
});