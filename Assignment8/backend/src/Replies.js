const db = require('./RepliesCmd');

exports.GetReplies = async (req, res) => {
  let result = await db.GetById(req.params.id);
  if(result){
      res.status(200).json(result);
  }
  else{
      res.status(400).send('Get failed');
  }
};

