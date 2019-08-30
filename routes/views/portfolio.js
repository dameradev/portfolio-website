const keystone = require('keystone');

exports = module.exports = function(req, res) {
  const view = new keystone.View(req, res);
  const locals = res.locals;
  
  // Set locals
  
  locals.section = "store";
  locals.filters = {
    portfolio: req.params.portfolio
  }
  
  locals.data = {
    portfolios: []
  }
  view.query('twitterGallery',  keystone.list("Gallery").model.findOne({key: "twitter-clone"}));
  view.on('init', function(next) {
    const q = keystone.list('Portfolio').model.findOne({
      slug: locals.filters.portfolio
    });
    
   
    q.exec(function(err, result){
      locals.data.portfolio = result;
      
      next(err);
    })
  })
  
  // Render view
  view.render('portfolio')
} 