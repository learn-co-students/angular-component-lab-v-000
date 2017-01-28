//function ContactCard() {
var ContactCard = {
	//return {
		//scope: {
		bindings: {
			name: '=',
			email: '=',
			phone: '='
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ c.name }}',
				'<label>Email:</label>',
				'{{ c.email }}',
				'<label>Phone:</label>',
				'{{ c.phone }}',
			'</div>'
		].join(''),
		controllerAs: 'c'
		//restrict: 'E'
	//};
}

angular
	.module('app')
	.component('contactCard', ContactCard);
	//.directive('contactCard', ContactCard);