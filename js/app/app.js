angular
  .module('mainApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'js/app/views/home.html',
        controller: 'StudentController'
      })
      .when('/viewStudents', {
        templateUrl: 'js/app/views/viewStudents.html',
        controller: 'StudentController'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });