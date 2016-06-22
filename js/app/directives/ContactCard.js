var ContactCard = {
  bindings: {
      name: '=',
      email: '=',
      phone: '='
    },
  template: [
      '<div>',
        '<h4>Contact Card</h4>',
        '<label>NAME:</label>',
        '{{ ctrl.name }}',
        '<label>EMAIL:</label>',
        '{{ ctrl.email }}',
        '<label>PHONE:</label>',
        '{{ ctrl.phone }}',
      '</div>'
    ].join(''),
    controllerAs: 'ctrl'
};

angular
  .module('app')
  .component('contactCard', ContactCard);
