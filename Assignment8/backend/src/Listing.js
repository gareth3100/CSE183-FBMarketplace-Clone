
const { Pool } = require('pg');

const db = require('./ListingCmd');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
});

exports.GetListings = async (req, res) => {
  let result = await db.GetAll();
  if(result){
      res.status(200).json(result);
  }
  else{
      res.status(400).send('Get All failed');
  }
};