(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter) {
  $scope.items = "";
  $scope.message = "";

  $scope.checkTooMuch = function () {
    if ($scope.items === "") {
      $scope.message = "Please enter data first";
      return;
    }

    var itemCount = $scope.items.split(",").length;    
    if (itemCount <= 3) {
      $scope.message = "Enjoy!";
    }
    else if (itemCount > 3) {
      $scope.message = "Too much!";
    }
  };

}

})();