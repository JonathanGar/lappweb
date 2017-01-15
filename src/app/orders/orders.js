(function(){
  'use strict';

  angular.module('lappWeb')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider

        .state('orders', {
            url: '/orders',
            templateUrl: 'app/orders/orders.html',
            controller: 'OrdersController',
            controllerAs: 'vm',
            authenticate: true
        })

        .state('order-detail', {
            url: '/order/:id',
            templateUrl: 'app/orders/order-detail.html',
            controller: 'OrdersController',
            controllerAs: 'vm',
            authenticate: true
        })
    }]);

})();
