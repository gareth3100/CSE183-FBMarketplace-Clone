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

exports.GetSearchedListings = async (req, res) => {
  let result = await db.GetSearched(req.query.search);
  if (result) {
    res.status(200).json(result);
  }
  else {
    res.status(400).send('Get Search failed');
  }
}

exports.GetCategoryListing = async (req, res) => {
  let result = await db.GetCategoryListingDB(req.query.category);
  if (result) {
    res.status(200).json(result);
  }
  else {
    res.status(400).send('Get category listings failed');
  }
}