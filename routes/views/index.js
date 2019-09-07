var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
  view.query('portfolios', keystone.list('Portfolio').model.find().limit(6).sort({title: -1}));
	// Render the view
	view.render('index');
};
