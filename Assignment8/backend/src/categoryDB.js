const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
});

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhcmV0aHNhbWFAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjM4NDI2MTY3LCJleHAiOjE2NDAyMjYxNjd9.Nj_4vhMo7OmQDFk_PoePL8S1wsy2cPuq97Cqn0BBfmg
exports.filterCategory = async (category) => {
  console.log('hi');
  let select = 'SELECT filters, subcategories FROM category';
  if (category) {
    select += ` WHERE filters ~* $1`;
  }
  const query = {
    text: select,
    values: category,
  };
  const {rows} = await pool.query(query);
  const categories = [];
  for (const row of rows) {
    categories.push(row);
  }
  return categories;
};
