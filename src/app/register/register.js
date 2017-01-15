(function(){
  'use strict';

  angular.module('lappWeb')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider

        .state('register', {
            url: '/register',
            templateUrl: 'app/register/register.html',
            controller: 'RegisterController',
            controllerAs: 'register'
        })
    }]);

})();
