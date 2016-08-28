function ContactCard() {
  function ContactCard() {
  	return {
  		controller: function () {
  		  this.name;
  		},
  		template: [
  			'<div>',
  				'<h4>Contact Card</h4>',
  				'<label>Name:</label>',
  				'{{ name }}',
  				'<label>Email:</label>',
  				'{{ email }}',
  				'<label>Phone:</label>',
  				'{{ phone }}',
  			'</div>'
  		].join(''),
  		restrict: 'E'
  	};
  }

  angular
  	.module('app')
  	.directive('contactCard', ContactCard);
}

{
  name: '=',
  email: '=',
  phone: '='
}
