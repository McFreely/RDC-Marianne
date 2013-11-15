Ember.Handlebars.helper('result', function(value) {
	if (value > 50) {
		return "+++ "  + value + ' %';
	} else {
		return "--- " + value + ' %';
	}
});

