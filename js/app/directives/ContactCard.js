var ContactCard = {
		controller: 'ContactController',
		controllerAs: 'contact',
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ contact.name  }}',
				'<label>Email:</label>',
				'{{ contact.email }}',
				'<label>Phone:</label>',
				'{{ contact.phone }}',
			'</div>'
		].join(''),
		restrict: 'E',
		bindings: {
			name: '=',
			email: '=',
			phone: '='
		}
	};

angular
	.module('app')
	.component('contactCard', ContactCard);
