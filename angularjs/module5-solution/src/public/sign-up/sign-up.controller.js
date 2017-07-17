(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService', '$element', 'ApiPath', 'MenuService'];
function SignUpController(UserService, $element, ApiPath, MenuService) {
  var $ctrl = this;
  $ctrl.submitSuccess = false;
  $ctrl.favouriteDish = {
    invalid: false
  };

  $ctrl.submit = function() {
    MenuService.getMenuItem($ctrl.favouriteDish.shortName).then(function(data){
      var userData = {
        firstName: $ctrl.firstName,
        lastName: $ctrl.lastName,
        email: $ctrl.email,
        phone: $ctrl.phone,
        favouriteDish: {
          shortName: $ctrl.favouriteDish.shortName
        }
      }
      UserService.setUser(userData);
      $ctrl.submitSuccess = true;
      $ctrl.favouriteDish.invalid = false;

    }, function(data) {
      $ctrl.favouriteDish.invalid = true;

    });
  }
}

})();
