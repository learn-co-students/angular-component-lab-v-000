var ContactCard = {
		bindings: {
			name: '=',
			email: '=',
			phone: '='
		},
		controller: function(){},
		controllerAs: 'ctrl',
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
		].join('')
}

angular
	.module('app')
	.component('contactCard', ContactCard);
