(function () {
  'use strict';

  angular
    .module('lappWeb')
    .controller('MainController', MainController);

  MainController.$inject = ['MainService', 'CartService', 'FavoritesService', '$rootScope', 'toastr'];

  /** @ngInject */
  function MainController(MainService, CartService, FavoritesService, $rootScope, toastr) {
    var vm = this;

    if (angular.isUndefined($rootScope.cart)) {
      $rootScope.cart = {
        products: []
      }
    }

    if (angular.isUndefined($rootScope.favorites)) {
      $rootScope.favorites = {
        products: []
      }

      $rootScope.favorites.products = FavoritesService.get();
    }


    if (localStorage.getItem("settings") === null) {
      MainService.getSettings();
    }
    angular.element(document.querySelector('.fixed-header-margin')).css({
      'padding-top': angular.element(document.querySelector('header')).outerHeight(true)
    });


    vm.myPromise = MainService.catalogs().then(function (resp) {
      vm.catalogs = resp;
    });

    vm.AddProduct = function (product) {
      CartService.add(product, 1);
      toastr.success('Producto añadido al carrito', 'Información');
    };

    vm.AddFavorite = function (product) {
      FavoritesService.add(product);
      toastr.success('Producto añadido a favoritos', 'Información');
    };

  }
})();
