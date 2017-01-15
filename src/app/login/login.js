(function(){
  'use strict';

  angular.module('lappWeb')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider

        .state('login', {
            url: '/login/',
            templateUrl: 'app/login/login.html',
            controller: 'LoginController',
            controllerAs: 'login'
        })
    }]);

})();
