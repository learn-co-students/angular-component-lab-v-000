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

// var Counter =  {
//     template: [
//             '<div ng-click="counter.increment()" class="counter">',
//                 '<h3>Counter</h3>',
//                 '<div>Click anywhere to increment the counter!</div>',
//                 '<div class="counter__count">Current count: {{ counter.count }}</div>',
//             '</div>'
//         ].join(''),
//     controller: function ($scope) {
//             this.count = 0;
//      
//             this.increment = function () {
//                         this.count++;
//                     };
//         },
//     controllerAs: 'counter'
// };
//  
// angular
//     .module('app')
//         .component('counter', Counter);
