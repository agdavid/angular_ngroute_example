function StudentController(StudentService) {

  var ctrl = this;

  ctrl.students = StudentService.getStudents();

  ctrl.message = 'Click on the hyper link to view the students list.';
}

angular
  .module('mainApp')
  .controller('studentController', StudentController);