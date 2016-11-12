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
    bindings: {
      name: '=',
      email: '=',
      phone: '='
    },
    require: { parent: '^ContactController' },
    controllerAs: 'contact'
  };

angular
  .module('app')
  .component('contactCard', ContactCard);
