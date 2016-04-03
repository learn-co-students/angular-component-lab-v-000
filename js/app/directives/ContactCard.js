// function ContactCard() {
// 	return {
// 		scope: {
// 			name: '=',
// 			email: '=',
// 			phone: '='
// 		},
// 		template: [
// 			'<div>',
// 				'<h4>Contact Card</h4>',
// 				'<label>Name:</label>',
// 				'{{ name }}',
// 				'<label>Email:</label>',
// 				'{{ email }}',
// 				'<label>Phone:</label>',
// 				'{{ phone }}',
// 			'</div>'
// 		].join(''),
// 		restrict: 'E'
// 	};
// }
//
// angular
// 	.module('app')
// 	.directive('contactCard', ContactCard);
var ContactCard = {
		bindings: {
			name: '=',
			email: '=',
			phone: '='
		},
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
    // controller:{},
    controllerAs: 'ctrl'
		// restrict: 'E'

}

angular
	.module('app')
	.component('contactCard', ContactCard);
