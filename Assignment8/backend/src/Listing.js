const db = require('./ListingCmd');

exports.GetListings = async (req, res) => {
  let result = await db.GetAll();
  if(result){
      res.status(200).json(result);
  }
  else{
      res.status(400).send('Get All failed');
  }
};

exports.GetSearchedAndCatListings = async (req, res) => {
  let result = await db.GetSearchedAndCategoryListings(req.query.category
  , req.query.search);
  if (result !== []) {
    res.status(200).json(result);
  }
  else {
    res.status(400).send();
  }
}

exports.GetSearchedAndSubCatListings = async (req, res) => {
  let result = await db.GetSearchedAndSubCategoryListings(req.query.subCategory
  , req.query.search);
  if (result !== []) {
    res.status(200).json(result);
  }
  else {
    res.status(400).send();
  }
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
