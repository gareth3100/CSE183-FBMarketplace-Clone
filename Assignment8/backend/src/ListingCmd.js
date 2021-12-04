const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
});

exports.GetAll = async () => {
  let select = 'SELECT content, subcategories FROM listing';
  const { rows } = await pool.query(select);
  const listings = rows;
  return listings;
}

exports.GetSearchedAndCategoryListings = async (category, search) => {
  let select = "select content, subcategories from listing";
  let query;
  if (category !== undefined && search === undefined) {
    select += " where (content ->> 'Category' = $1)";
    query = {
      text: select,
      values: [category]
    };
  }
  else if (category === undefined && search !== undefined) {
    select += " where (content->>'title' ~* $1)";
    query = {
      text: select,
      values: [search]
    };
  }
  else if (category !== undefined && search !== undefined) {
    select += " where (content->>'title' ~* $1) AND (content ->> 'Category' = $2)";
    query = {
      text: select,
      values: [search, category]
    };
  } else {
    query = select;
  }
  const { rows } = await pool.query(query);
  const listings = rows;
  return listings;
}

exports.GetSearchedAndSubCategoryListings = async (subCategory, search) => {
  let select = "select content, subcategories from listing";
  let query;
  if (subCategory !== undefined && search === undefined) {
    query = select;
  }
  else if (subCategory === undefined && search !== undefined) {
    select += " where (content->>'title' ~* $1)";
    query = {
      text: select,
      values: [search]
    };
  }
  else {
    select += " where (content->>'title' ~* $1)";
    query = {
      text: select,
      values: [search]
    };
  }
  const { rows } = await pool.query(query);

  if (subCategory !== undefined) {
    let listings = rows;
    let results = listings.filter((object) => object.subcategories.includes(subCategory));
    return results;
  }
  else {
    return rows;
  }
  
}