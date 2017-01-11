(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getItemsToBuy();

  showList.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
  };

  showList.errorMessage = function () {
    if (showList.items.length === 0) {
      return true;
    }
    return false;
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getItemsBought();

  showList.errorMessage = function () {
    if (showList.items.length === 0) {
      return true;
    }
    return false;
  };
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsToBuy = [
    { name: "cookies", quantity: 10 },
    { name: "milk", quantity: 3 },
    { name: "peanuts", quantity: 200 },
    { name: "chocolate", quantity: 5 },
    { name: "gummies", quantity: 50 },
    { name: "beer", quantity: 30 }
  ];
  var itemsBought = [];

  service.boughtItem = function (itemIdex) {
    var item = itemsToBuy.splice(itemIdex, 1);
    itemsBought.push(item[0]);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };
}

})();