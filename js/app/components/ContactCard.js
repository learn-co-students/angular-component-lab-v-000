angular.module('app')
  .component('Contact', Contact);

  var Contact = {
    template: [
      '<div>',
        '<h4>Contact Card</h4>',
        '<label>Name:</label>',
        '{{ ContactController.name }}',
        '<label>Email:</label>',
        '{{ ContactController.email }}',
        '<label>Phone:</label>',
        '{{ ContactController.phone }}',
      '</div>'
    ].join(''),
    controllerAs: 'ContactController'
  }