(function () {
  'use strict';

  angular
    .module('lappWeb', [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ngResource',
      'ui.router',
      'satellizer',
      'ui.bootstrap',
      'toastr',
      'ksSwiper',
      'cgBusy'
    ])

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$authProvider',
      function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $authProvider) {
        $urlRouterProvider
          .otherwise('/login');

        $locationProvider.html5Mode(true);

        //CORS
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $httpProvider.defaults.headers.common['ZUMO-API-VERSION'] = '2.0.0'; // add the application key
        //$httpProvider.defaults.headers.common['X-ZUMO-APPLICATION'] = 'myapplicationkey'; // add the application key
        //$httpProvider.defaults.headers.common['Content-Type'] = 'Application/json';
        $authProvider.facebook({
          clientId: '962347967217066',
          responseType: 'token'
        });

        $authProvider.google({
          clientId: '395438047856-0fc3eejasd3lfibv63039e14uhd6a3ob.apps.googleusercontent.com'
        });

      }])

    .factory('httpRequestInterceptor', function ($cookies) {
      return {
        request: function (config) {
          //config.headers.Authorization = 'ZUMO-API-VERSION 2.0.0';
          return config;
        }
      };
    });

})();
