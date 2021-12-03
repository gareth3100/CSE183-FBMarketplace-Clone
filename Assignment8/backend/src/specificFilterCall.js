const db = require('./specificListing.js');

exports.selectCategory = async (req, res) => {
  let dbCall = await db.GetSpecificListing();
  let specificListing = [];
  if (dbCall[0] != undefined) {
    dbCall.map((filter) => {
      specificListing.push(
        {
          "name": filter.categoryname, 
          "filters": filter.filters, 
          "subcategories": filter.subcategories,
        }
      );
    });
    res.status(200).send(specificListing);
  } 
  else {
    res.status(404).send();
  }
};