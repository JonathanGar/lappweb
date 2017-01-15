/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('lappWeb')
    .constant('moment', moment)
    .constant('RESOURCE_API', 'http://lapptienda-api-dev-auth.azurewebsites.net/api/')
    .constant('RESOURCE_API_TEMP', 'http://lapptienda-api-dev-auth.azurewebsites.net/api/')
    .constant('GRAPH_API_URL', 'https://graph.facebook.com/v2.7/me?fields=id,name,email,gender');

})();
