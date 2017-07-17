(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = ['$window', '$http', 'ApiPath', 'MenuService'];
function UserService($window, $http, ApiPath, MenuService) {
  var service = this;

  service.setUser = function (userData) {
    $window.localStorage.userData = angular.toJson(userData);
  };

  service.getUser = function () {
    if ($window.localStorage.hasOwnProperty('userData')) {
      var userData = angular.fromJson($window.localStorage.userData);

      return MenuService.getMenuItem(userData.favouriteDish.shortName).then(function(data){
        userData.favouriteDish = {
          shortName: data.short_name,
          name: data.name,
          description: data.description,
          imagePresent: data.image_present
        }
        return userData;
      });
    }
    return false;
  };
}


})();
