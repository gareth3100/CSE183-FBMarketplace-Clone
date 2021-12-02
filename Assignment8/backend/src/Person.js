
const bcrypt = require('bcrypt');
const { Pool } = require('pg');

const db = require('./users.js');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
});

exports.insertUser = async (req, res) => {
  const {firstName, lastName, email, password} = req.body;
  if(!firstName || !lastName || !email || !password){
      res.status(400);
  }
  else{
    const encryptedPass = await bcrypt.hash(password, 3);
    const data = {
        'firstName' : firstName,
        'lastName' : lastName,
        'email' : email,
        'password' : encryptedPass
    }
    await db.insertNewUser(data);
    res.status(200);
  }
};


