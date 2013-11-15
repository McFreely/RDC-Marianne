var MoviesMovieRoute = Ember.Route.extend({
	model: function(params) {
		return App.Movie.find(params.movie_id);
	}
});

module.exports = MoviesMovieRoute;

