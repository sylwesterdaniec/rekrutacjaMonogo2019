(function () {
  'use strict';

  var app = angular.module('app', ['ngRoute']);

  app.config(getRoutes);

  function getRoutes($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html'
      })
      .when('/home', {
        templateUrl: 'app/views/home.html'
      })
      .when('/map', {
        templateUrl: 'app/views/map.html'
      })
      .when('/contact', {
        templateUrl: 'app/views/contact.html'
      });

    //$locationProvider.html5Mode(true);
  }
})();
