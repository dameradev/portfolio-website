// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'Damjan_Radev',
	'brand': 'Damjan_Radev',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
  'view engine': '.hbs',
  'cloudinary config': 'cloudinary://218133611424185:FOwLinzRuRdbVyxUtjFmrji8dMQ@dhtqhdbx7',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs',
	}).engine,

	'emails': 'templates/emails',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	posts: ['posts', 'post-categories'],
	galleries: 'galleries',
	enquiries: 'enquiries',
	users: 'users',
});



// keystone.set('cloudinary config', { cloud_name: 'dhtqhdbx7', api_key: '218133611424185', api_secret: 'FOwLinzRuRdbVyxUtjFmrji8dMQ' });
// or
// keystone.set('cloudinary config', 'CLOUDINARY_URL=cloudinary://218133611424185:FOwLinzRuRdbVyxUtjFmrji8dMQ@dhtqhdbx7', {api_key: "218133611424185"} );
 
// // optional, will prefix all built-in tags with 'keystone_'
// keystone.set('cloudinary prefix', 'keystone');
 
// // optional, will prefix each image public_id with [{prefix}]/{list.path}/{field.path}/
// keystone.set('cloudinary folders', true);
 
// // optional, will force cloudinary to serve images over https
// keystone.set('cloudinary secure', true);


// Start Keystone to connect to your database and initialise the web server


if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
	console.log('----------------------------------------'
	+ '\nWARNING: MISSING MAILGUN CREDENTIALS'
	+ '\n----------------------------------------'
	+ '\nYou have opted into email sending but have not provided'
	+ '\nmailgun credentials. Attempts to send will fail.'
	+ '\n\nCreate a mailgun account and add the credentials to the .env file to'
	+ '\nset up your mailgun integration');
}


keystone.start();
