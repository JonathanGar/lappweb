(function() {

	angular
		.module('lappWeb')
		.service('ShopService', ['RESOURCE_API', '$http', '$q', '$filter', function(RESOURCE_API, $http, $q, $filter) {

      $http.defaults.useXDomain = true;
      delete $http.defaults.headers.common['X-Requested-With'];

			var service = {
				get: getCategories,
				getSubCategory: getSubCategory
			};
			return service;

      function getCategories(id) {
        var deferred = $q.defer();
        $http.get(RESOURCE_API + 'catalog/category/' + id)
          .success(function(product) {
            deferred.resolve(product);
          })
          .error(function(data, status, headers, config) {
            // data is always undefined here when there is an error
            console.error('Error fetching feed:', data);
          });
        return deferred.promise;
      }

			function getSubCategory(id) {
        var deferred = $q.defer();
        $http.get(RESOURCE_API + 'catalog/subcategory/' + id)
          .success(function(product) {
            deferred.resolve(product);
          })
          .error(function(data, status, headers, config) {
            // data is always undefined here when there is an error
            console.error('Error fetching feed:', data);
          });
        return deferred.promise;
      }


		}]);
})();
