(function () {
    'use strict';

    angular
      .module('lappWeb')
      .controller('LoginController', LoginController);

    LoginController.$inject = ['MainService', '$rootScope', '$stateParams', '$auth', 'toastr'];

    /** @ngInject */
    function LoginController(MainService, $rootScope, $stateParams, $auth, toastr) {
        var vm = this;

        vm.authenticate = function (provider) {
            $auth.authenticate(provider).then(function (response) {
                debugger;
                MainService.getFacebookProfile(response.access_token).then(function (data) {
                    debugger;
                });
                toastr.success("Sesión Iniciada", "Aviso");
            })
            .catch(function (response) {
                toastr.error("Error iniciando sesión", "Error");
            });
        };
    }

})();
