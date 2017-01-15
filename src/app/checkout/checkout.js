(function(){
  'use strict';

  angular.module('lappWeb')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider

        .state('checkout', {
            url: '/checkout',
            templateUrl: 'app/checkout/checkout.html',
            controller: 'CheckoutController',
            controllerAs: 'checkout'
        })
    }]);

})();
