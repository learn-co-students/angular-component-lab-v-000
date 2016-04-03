var ContactCard = {
		// bindings: {
		// 	name: '<',
		// 	email: '<',
		// 	phone: '<'
		// },
		template: [
			// '<li>',
			// 	'<h4>Contact Card</h4>',
			// 	'<label>Name:</label>',
			// 	'{{ $ctrl.name }}',
			// 	'<label>Email:</label>',
			// 	'{{ email }}',
			// 	'<label>Phone:</label>',
			// 	'{{ phone }}',
			// '</li>'
      '<div>',
      '<h1>Hi</h1>',
      '</div>'
		].join('')
    // controller:{},
    // controllerAs: 'ctrl'
		// restrict: 'E'

}

angular
	.module('app')
	.component('contactCard', ContactCard);
