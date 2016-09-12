angular
  .module('mainApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'js/app/views/home.html',
        controller: 'studentController'
      })
      .when('/viewStudents', {
        templateUrl: 'js/app/views/viewStudents.html',
        controller: 'studentController'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });