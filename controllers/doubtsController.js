const Doubt = require('../models/doubt.js');
const ObjectId = require('mongodb').ObjectID;

module.exports.list = (req, res, next) => {
  Doubt.find((error, docs) => {
    res.render('doubts/list', {
      doubts: docs
    });
  });
}

module.exports.create = (req, res, next) => {
  res.render('doubts/create', { errors: []});
}

module.exports.doCreate = (req, res, next) => {
  Doubt.create(req.body, (err, doubt) => {
    if (err) {
      console.error(err);
      res.render('doubts/create', { errors: err.errors });
    } else {
      res.redirect('/doubts');
    }
  });
}

module.exports.delete = (req, res, next) => {
  Doubt.remove({ "_id": ObjectId(req.params.id) }, (err) => {
    console.log(err);
    if (err) {
      console.error(err);
    } else {
      res.redirect('/doubts');
    }
  })
}
