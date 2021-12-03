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
