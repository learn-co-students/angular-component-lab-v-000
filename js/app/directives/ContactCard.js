var ContactCard = {
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
		controllerAs:'contact',
		bindings:{
			name:'=',
			email:'=',
			phone:'='
		}
	};

angular
	.module('app')
	.component('contactCard', ContactCard);