var App = require('./app');

App.Router.map(function() {
	this.resource('movies', function() {
		this.route('movie', {path: '/:movie_id'});
	})
});

