
const keystone = require('keystone');

exports = module.exports = function(req, res) {
  const view = new keystone.View(req, res);
  const locals = res.locals;
  
  // Set locals
  locals.section = "store";

  // Load Products
  view.query('portfolios', keystone.list('Portfolio').model.find());

  // Render view
  view.render('portfolio')
}