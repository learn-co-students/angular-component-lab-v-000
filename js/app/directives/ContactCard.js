
	var ContactCard = {
		bindings: {
			name: '=',
			email: '=',
			phone: '='
		},
		require: {contact: 'ContactCard'},
		controllerAs: 'contact',
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ contact.name }}',
				'<label>Email:</label>',
				'{{ contact.email }}',
				'<label>Phone:</label>',
				'{{ contact.phone }}',
			'</div>'
		].join(''),
		restrict: 'E'
	}


angular
	.module('app')
	.component('contactCard', ContactCard);
