var ApplicationView = Ember.View.extend({
	didInsertElement: function() {
		this.$().foundation();
	}
});

module.exports = ApplicationView;