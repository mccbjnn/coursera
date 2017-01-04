(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter) {
  $scope.items = "";
  $scope.message = "";

  $scope.checkTooMuch = function () {
    var itemCount = $scope.items.split(",").filter(function(item){
      return /\S/.test(item);
    }).length;

    if (itemCount === 0) {
      $scope.message = "Please enter data first";
      $scope.inputClass = 'border-red';
      $scope.messageClass = 'font-red';
    }        
    else if (itemCount <= 3) {
      $scope.message = "Enjoy!";
      $scope.inputClass = 'border-green';
      $scope.messageClass = 'font-green';
    }
    else if (itemCount > 3) {
      $scope.message = "Too much!";
      $scope.inputClass = 'border-green';
      $scope.messageClass = 'font-green';
    }
  };

}

})();