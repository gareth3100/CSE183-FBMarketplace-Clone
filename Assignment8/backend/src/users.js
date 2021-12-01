const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
});

exports.allUsersInfo = async () => {
  let select = 'SELECT info FROM person';
  const query = {
    text: select,
    values: []
  };
  const { rows } = await pool.query(query);
  const users = rows;
  return users;
}

exports.insertNewUser = async (info) => {
  let insert = 'Insert into person (info) values ($1)';
  const query = {
    text: insert,
    values:[info]
  }
  await pool.query(query);
}