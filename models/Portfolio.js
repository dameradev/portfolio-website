const keystone = require('keystone');
const Types = keystone.Field.Types;

const PortfolioItem = new keystone.List('Portfolio', {
  map: {name: 'title'},
  singular: 'Portfolio',
  plural: 'Portfolios',
  autokey: {path: 'slug', from: 'title', unique: true}
});

PortfolioItem.add({
  title: {type: String, required: true},
  // image: {type: String},
  
  description: {type: Types.Html, wysiwyg: true, height: 300},
  image: {type: Types.CloudinaryImage},
  publishedDate: {type: Date, default: Date.now},
  gitLink: {type: String}
});


PortfolioItem.register();