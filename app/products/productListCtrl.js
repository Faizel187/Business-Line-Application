(function () {
  "use strict";
  angular
    .module("productManagement")
    .controller("ProductListCtrl",
      ProductListCtrl);

  ProductListCtrl.$inject = [
    '$scope',
    'productResource'
  ];

  function ProductListCtrl($scope, productResource) {
    productResource.query(function (data) {
      $scope.products = data;
    });

    $scope.showImage = false;

    $scope.toggleImage = function () {
      $scope.showImage = !$scope.showImage;
    }
  }
}());