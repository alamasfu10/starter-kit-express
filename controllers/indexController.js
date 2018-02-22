module.exports.index = (req, res, next) => {
  res.render('index', { title: 'Express' });
}

module.exports.contact = (req, res, next) => {
  res.render('contact');
}
