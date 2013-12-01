var TopBarComponent = Ember.Component.extend({
	initTopBar: function () {
		$(document).foundation('topbar', {})
	}.on('didInsertElement')
});

module.exports = TopBarComponent;