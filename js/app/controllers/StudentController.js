function StudentController() {

  var ctrl = this;

  ctrl.students = [
  {name: 'Mark Waugh', city: 'New York'},
  {name: 'Steve Jonathan', city: 'London'},
  {name: 'John Marcus', city: 'Paris'}
  ];

  ctrl.message = 'Click on the hyper link to view the students list.';
}

angular
  .module('mainApp')
  .controller('studentController', StudentController);