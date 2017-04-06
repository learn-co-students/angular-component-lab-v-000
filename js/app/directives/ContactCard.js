
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
    controller: 'ContactController',
    bindings: {
      name: '=',
      email: '=',
      phone: '='
    },
    controllerAs: 'contact'
};

angular
	.module('app')
	.component('contactCard', ContactCard);