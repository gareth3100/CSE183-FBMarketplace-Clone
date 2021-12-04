const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
});


exports.GetByListingId = async (id) => {
    let select = 'SELECT * from replies where ListingId = $1'
    const query = {
        text: select,
        values: [id],
      };
  const { rows } = await pool.query(query);
  const listings = rows;
  return listings;
}