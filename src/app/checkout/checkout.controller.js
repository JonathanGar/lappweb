(function() {
  'use strict';

  angular
    .module('lappWeb')
    .controller('CheckoutController', CheckoutController);

  CheckoutController.$inject = ['$rootScope',  '$stateParams'];

  /** @ngInject */
  function CheckoutController($rootScope, $stateParams) {
    var vm = this;

    $('.accordeon-title').on('click', function(){
    	$(this).toggleClass('active');
    	$(this).next().slideToggle();
    });

  }
})();
