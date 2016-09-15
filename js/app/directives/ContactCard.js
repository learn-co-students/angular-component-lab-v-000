function ContactCard() {
	return {
	
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
		bindings: {
			name: '=',
			email: '=',
			phone: '='}, 
		controllerAs: 'contact',
		restrict: 'E'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);