Ember.Handlebars.helper('result', function(value) {
	var new_value = value/10;
	if (value > 65) {
		return new Handlebars.SafeString('<span><i class="fi-arrow-up"></i> ' + new_value + ' / 10 </span>');		
	} else if ( value < 65 && value > 35) {
		return new Handlebars.SafeString('<span><i class="fi-arrow-right"></i> ' + new_value + ' / 10 </span>');
	} else {
		return new Handlebars.SafeString('<span><i class="fi-arrow-down"></i> ' + new_value + ' / 10 </span>');
	}
});

