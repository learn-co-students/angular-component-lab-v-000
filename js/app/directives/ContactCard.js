var ContactCard = {
		bindings: {
			contact: '='
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ ctrl.contact.name }}',
				'<label>Email:</label>',
				'{{ ctrl.contact.email }}',
				'<label>Phone:</label>',
				'{{ ctrl.contact.phone }}',
			'</div>'
		].join(''),
		controllerAs: 'ctrl',
		restrict: 'E'
};

angular
	.module('app')
	.component('contactCard', ContactCard)
