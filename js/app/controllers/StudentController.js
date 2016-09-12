function StudentController() {
  this.students = [
  {name: 'Mark Waugh', city: 'New York'},
  {name: 'Steve Jonathan', city: 'London'},
  {name: 'John Marcus', city: 'Paris'}
  ];

  this.message = 'Click on the hyper link to view the students list.';
}

angular
  .module('app')
  .controller('StudentController', StudentController);