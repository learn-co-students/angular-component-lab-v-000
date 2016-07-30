var ContactCard = {
	require: { parent: '^contactController'},
	bindings: {
		name: '=',
		email: '=',
		phone: '='
	},
	template: [
		'<div>',
			'<h4>Contact Card</h4>',
			'<label>Name:</label>',
			'{{ contactCard.name }}',
			'<label>Email:</label>',
			'{{ contactCard.email }}',
			'<label>Phone:</label>',
			'{{ contactCard.phone }}',
		'</div>'
	].join('')
}

angular
	.module('app')
	.component('contactCard', ContactCard);
