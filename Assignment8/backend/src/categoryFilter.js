const db = require('./categoryDB.js');

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1YW5sZWVAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjM4NDQ0MTg1LCJleHAiOjE2NDAyNDQxODV9.NzAxn2xjETI4-gqtK6rSIdRiv7Ob-z6r7D_ea5W4K9Y
exports.selectCategory = async (req, res) => {
  let category = await db.filterCategory(req.query.Category);
  if (category[0] != undefined) {
    category = category[0];
    res.status(200).send({"name": category.categoryname, "filters": category.filters, "subcategories": category.subcategories});
  } 
  else {
    res.status(404).send();
  }
};
