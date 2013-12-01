var MoviesRoute = Ember.Route.extend({
		model: function() {
			return App.Movie.find();
	}
});

module.exports = MoviesRoute;

