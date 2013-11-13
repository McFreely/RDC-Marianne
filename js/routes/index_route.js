var IndexRoute = Ember.Route.extend({
	redirect: function() {
		this.transitionTo('movies');
	}	
});

module.exports = IndexRoute;

