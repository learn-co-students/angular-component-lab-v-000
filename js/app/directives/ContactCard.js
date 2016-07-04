angular
	.module('app')
	.component('contactCard', {
		bindings: {
			name: '=',
			email: '=',
			phone: '='
		},
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
		controllerAs: 'contact'
	});
	
