(function(){
  'use strict';

  angular.module('lappWeb')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider

        .state('cart', {
            url: '/cart',
            templateUrl: 'app/cart/cartdetail.html',
            controller: 'CartDetailController',
            controllerAs: 'cart',
            authenticate: true
        })
    }]);

})();
