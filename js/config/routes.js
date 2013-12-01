var App = require('./app');

App.Router.map(function() {
	this.resource('movies');
	this.route('movie', {path: '/movie/:movie_id'});
});
