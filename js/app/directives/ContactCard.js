var ContactCard = {
	template: [
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
	controller: ContactController,
	controllerAs: 'ctrl',
	bindings: {
		name: '=',
		email: '=',
		phone: '='
	}
};


angular
	.module('app')
	.component('contactCard', ContactCard);