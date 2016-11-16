var ContactCard = {
	bindings: {
		name: '=',
		email: '=',
		phone: '='
	},
	controller: function() {},
	controllerAs: 'wat',
	template: [
		'<div>',
			'<h4>Contact Card</h4>',
			'<label>Name:</label>',
			'{{ wat.name }}',
			'<label>Email:</label>',
			'{{ wat.email }}',
			'<label>Phone:</label>',
			'{{ wat.phone }}',
		'</div>'
	].join(''),
	restrict: 'E'
};

angular
	.module('app')
	.component('contactCard', ContactCard);