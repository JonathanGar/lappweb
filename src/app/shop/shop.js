(function(){
  'use strict';

  angular.module('lappWeb')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider

        .state('categories', {
            url: '/categories/:id',
            templateUrl: 'app/shop/shopCategories.html',
            controller: 'ShopCategoriesController',
            controllerAs: 'shop'
        })
    }]);

})();
