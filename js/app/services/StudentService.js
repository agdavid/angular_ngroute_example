function StudentService() {
  this.getStudents = function() {
    return [
    {name: 'Mark Waugh', city: 'New York'},
    {name: 'Steve Jonathan', city: 'London'},
    {name: 'John Marcus', city: 'Paris'}
    ]
  };
}

angular
  .module('mainApp')
  .service('StudentService', StudentService);