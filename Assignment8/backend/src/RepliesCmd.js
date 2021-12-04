const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
});

exports.GetById = async (id) => {
  let select = 'SELECT * FROM replies where ListingId = $1';
  const query = {
    text: select,
    values: [id],
  };
  const { rows } = await pool.query(query);
  const listings = rows;
  return listings;
}

