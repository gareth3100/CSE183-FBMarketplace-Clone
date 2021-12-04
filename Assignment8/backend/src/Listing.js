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

exports.GetListingById = async (req, res) => {
    let result = await db.GetById(req.params.id);
    if(result){
        res.status(200).json(result);
    }
    else{
        res.status(400).send('Get By Id Failed');
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
