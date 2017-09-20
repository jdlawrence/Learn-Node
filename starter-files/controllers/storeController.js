exports.myMiddleware = (req, res, next) => {
  req.name = 'Smooth';
  throw Error('you\'re still the man!');
  next();
};

exports.flash = (req, res) => {
  req.flash('coolness', 'Smooth is a god');
  // console.log('hhhhh', req.flash('coolness'));
  res.redirect('/');
};

exports.homePage = (req, res) => {
  // console.log({ messages: req.flash('coolness') });
  // res.send(JSON.stringify(req.flash('coolness')));
  // console.log('fire', req.flash('coolness'));
  var dumb = req.flash('coolness');
  res.render('index', { messages: dumb });

};