const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
});

exports.GetAll = async () => {
  let select = 'SELECT content FROM listing';
  const query = {
    text: select,
    values: []
  };
  const { rows } = await pool.query(select);
  const listings = rows;
  return listings;
}

exports.GetSearched = async (search) => {
  let select = "select * from listing where content ->> 'title' ~* $1 OR content ->> 'category' ~* $1"
  const query = {
    text: select,
    values: [search]
  };
  const { rows } = await pool.query(query);
  const listings = rows;
  return listings;
}

exports.GetCategoryListingDB = async (category) => {
  let select = "select * from listing where content ->> 'category' ~* $1";
  const query = {
    text: select,
    values: [category]
  };
  const { rows } = await pool.query(query);
  const listings = rows;
  return listings;
}