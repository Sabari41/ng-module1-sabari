(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', controllerFunction)
  controllerFunction.$inject = ['$scope'];
  function controllerFunction($scope) {
      $scope.LunchMenu = "";
      $scope.LunchCheckResult = "";
      $scope.setLunch = function () {
        var noOfItems = findNumberOfStrings($scope.LunchMenu);
        if (noOfItems > 3) {
          $scope.LunchCheckResult = "Too much to eat lunch";
        }
        else if (noOfItems==0) {
          $scope.LunchCheckResult = "Please enter your lunch items to define the healthiness";
        }
        else {
          $scope.LunchCheckResult = "Enjoy the health !";
        }
    };

    function findNumberOfStrings(string) {
      var listOfItems = string.split(',');
      var totalNumberOfItems = listOfItems.length;
      for (var i = 0; i < listOfItems.length; i++) {
        if (listOfItems[i].trim() == '') {
          totalNumberOfItems -= 1;
        }
      }
      return totalNumberOfItems;
    }
  };
})();
