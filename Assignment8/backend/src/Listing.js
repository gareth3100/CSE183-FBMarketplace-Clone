const db = require('./ListingCmd');

exports.getListings = async (req, res) => {
  const result = await db.getAll();
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400).send('Get All failed');
  }
};

exports.getListingById = async (req, res) => {
  const result = await db.getById(req.params.id);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400).send('Get By Id Failed');
  }
};

exports.getSearchedAndCatListings = async (req, res) => {
  const result = await db.getSearchedAndCategoryListings(req.query.category
    , req.query.search);
  if (result !== []) {
    res.status(200).json(result);
  } else {
    res.status(400).send();
  }
};

exports.getSearchedAndSubCatListings = async (req, res) => {
  const result = await db.getSearchedAndSubCategoryListings(
    req.query.subCategory,
    req.query.search,
  );
  if (result !== []) {
    res.status(200).json(result);
  } else {
    res.status(400).send();
  }
};

exports.selectSpecificFilter = async (req, res) => {
  const dbCall = await db.getSpecificListing(
    req.query.category,
    req.query.subCategory,
    req.query.minPrice,
    req.query.maxPrice,
  );
  if (dbCall) {
    res.status(200).send(dbCall);
  } else {
    res.status(404).send();
  }
};

exports.getLocation = async (req, res) => {
  const dbCall = await db.getSearchedAndSubCategoryLocationListings(
    req.query.category,
    req.query.subCategory,
    req.query.search,
    req.query.location,
  );
  if (dbCall) {
    res.status(200).send(dbCall);
  } else {
    res.status(404).send();
  }
};
