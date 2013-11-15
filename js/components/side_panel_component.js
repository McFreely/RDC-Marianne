var SidePanelComponent = Ember.Component.extend({
	tagName: 'div',
	classNames: ["sidepanel", 'whatever'],
	classNameBindings: ['isOpen:opened:closed'],

	isOpen: false,

	actions: {
		toggleSidePanel: function() {
			this.toggleProperty("isOpen");
		}
	}
});

module.exports = SidePanelComponent;

