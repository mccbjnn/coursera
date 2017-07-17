(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userData', 'ApiPath'];
function MyInfoController(userData, ApiPath) {
  var $ctrl = this;

  $ctrl.userData = userData;
  if (userData) {
    $ctrl.userData.favouriteDish.imageUrl = ApiPath + '/images/' + userData.favouriteDish.shortName + ".jpg";
  }
}

})();
