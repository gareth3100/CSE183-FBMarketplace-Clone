const { Pool } = require('pg');
const db = require('./categoryDB.js');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
});

exports.filterCategory = async(req, res) => {
  let filterListing = db.filterCategory(req.query.category);
  console.log(filterListing);
  res.status(200).send(filterListing);
};
