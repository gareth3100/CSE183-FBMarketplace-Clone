const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');

const secrets = require('../data/secrets');

const db = require('./users.js');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
});

exports.authenticate = async (req, res) => {
  const {email, password} = req.body;
  const users = db.allUsers();
  console.log(users);
  res.status(200).json(users);
  // const user = users.find((user) => {
  //   return user.email === email &&
  //   bcrypt.compareSync(password, user.password);
  // });
  // if (user) {
  //   const accessToken = jwt.sign(
  //     {email: user.email, role: user.role},
  //     secrets.accessToken, {
  //       expiresIn: '30m',
  //       algorithm: 'HS256',
  //     });
  //   res.status(200).json({name: user.name, accessToken: accessToken});
  // } else {
  //   res.status(401).send('Username or password incorrect');
  // }
};

exports.check = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, secrets.accessToken, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

