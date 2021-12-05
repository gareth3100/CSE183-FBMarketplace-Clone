const db = require('./RepliesCmd');

exports.GetReplies = async (req, res) => {
  let result = await db.GetByListingId(req.params.id);
  
  res.status(200).json(result);
  
};