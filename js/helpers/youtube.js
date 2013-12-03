Ember.Handlebars.helper('youtube', function(link) {
	var trailer_link =   "<iframe width='853' height='480' scr='" 
					   + link 
					   + "' frameborder='0' allowfullscreen></iframe>";
	return new Handlebars.SafeString(trailer_link);
});

