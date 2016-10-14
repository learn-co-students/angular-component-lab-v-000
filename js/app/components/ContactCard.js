var ContactCard = {
	bindings: {
		name: '=',
		email: '=',
		phone: '='
	},	
	templateUrl: 'js/app/views/contact-card.html',	
	controllerAs: 'card'
};

angular
	.module('app')
	.component('contactCard', ContactCard);