exports.index = function(req, res) {
  res.locals.ip = req.ip;
  res.render('home');
};