const db = require('./ListingCmd');

exports.GetListings = async (req, res) => {
  let result = await db.GetAll();
  res.status(200).json(result);
};

exports.GetListingById = async (req, res) => {
    let result = await db.GetById(req.params.id);
    res.status(200).json(result);
};

exports.GetSearchedAndCatListings = async (req, res) => {
  let result = await db.GetSearchedAndCategoryListings(req.query.category
  , req.query.search);
  res.status(200).json(result); 
}

exports.GetSearchedAndSubCatListings = async (req, res) => {
  let result = await db.GetSearchedAndSubCategoryListings(req.query.subCategory
  , req.query.search);
  res.status(200).json(result);
}

exports.selectSpecificFilter = async (req, res) => {
  let dbCall = await db.GetSpecificListing(
    req.query.category,
    req.query.subCategory,
    req.query.minPrice,
    req.query.maxPrice
  );
  if (dbCall) {
    res.status(200).send(dbCall);
  } else {
    res.status(404).send();
  }
};

exports.getLocation = async (req, res) => {
  let dbCall = await db.GetSearchedAndSubCategoryLocationListings(
    req.query.category,
    req.query.subCategory,
    req.query.search,
    req.query.location
  );
  if (dbCall.length !== 0) {
    res.status(200).send(dbCall);
  } else {
    res.status(404).send();
  }
};