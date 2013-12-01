var FadeInView = Ember.View.extend({
	click: function() {
		this.$().hide();
	}
});

module.exports = FadeInView;