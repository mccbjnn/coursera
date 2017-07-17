(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://fierce-spire-20919.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
