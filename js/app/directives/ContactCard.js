// var ContactCard instead of function ContactCard()
var ContactCard = {
	// bindings instead of scope
	bindings: {
		name: '=',
		email: '=',
		phone: '='
	},
	template: [
		// add controller scope to attributes as ctrl
		'<div>',
			'<h4>Contact Card</h4>',
			'<label>Name:</label>',
			'{{ ctrl.name }}',
			'<label>Email:</label>',
			'{{ ctrl.email }}',
			'<label>Phone:</label>',
			'{{ ctrl.phone }}',
		'</div>'
	].join(''),
	controllerAs: 'ctrl'
};

angular
	.module('app')
	// change to component()
	.component('contactCard', ContactCard);
