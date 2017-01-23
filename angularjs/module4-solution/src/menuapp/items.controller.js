(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['categoryList'];
function ItemsController(categoryList) {
  var mainlist = this;
  mainlist.categoryList = categoryList;
}

})();
