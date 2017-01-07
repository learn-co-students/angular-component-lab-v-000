var ContactCard = {
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ contactComp.name }}',
				'<label>Email:</label>',
				'{{ contactComp.email }}',
				'<label>Phone:</label>',
				'{{ contactComp.phone }}',
			'</div>'
		].join(''),
		controller: ContactController,
		controllerAs: 'contactComp',
		bindings: {
				name: '=',
				email: '=',
				phone: '='
			}
}

angular
	.module('app')
	.component('contactCard', ContactCard);
