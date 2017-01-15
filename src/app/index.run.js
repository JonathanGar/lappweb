(function () {
  'use strict';

  angular
    .module('lappWeb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $rootScope.favorites = { products: []};
    if (angular.isDefined(localStorage.favorites) && angular.isDefined(JSON.parse(localStorage.favorites))) {
      $rootScope.favorites.products=(JSON.parse(localStorage.favorites));
    }
    $log.debug('runBlock end');
  }

})();
