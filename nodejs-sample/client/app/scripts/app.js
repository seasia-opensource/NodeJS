'use strict';

/**
* @ngdoc overview
* @name clientApp
* @description
* # clientApp
*
* Main module of the application.
*/
angular
  .module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
      $routeProvider
      .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'Home'
      })
      .otherwise({
          redirectTo: '/'
      });
  }).filter('pagination', function () {
      return function (input, start) {
          start = +start;
          return input.slice(start);
      };
  })
  .run(function ($rootScope) {
      $rootScope.baseUrl = 'https://ihg-rewards-game-api.herokuapp.com/';
  });


