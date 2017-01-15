(function () {

  'use strict';

  angular
    .module('lappWeb')
    .factory('OrdersService',OrdersService);

  function OrdersService() {
    return{
      my: myOrders
    }

    function myOrders() {

    }
  }

})();
