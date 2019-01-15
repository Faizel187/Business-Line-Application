(function () {
  "use strict";

  angular
    .module("productManagement")
    .controller("ProductEditCtrl", ProductEditCtrl);

  ProductEditCtrl.$inject = ['$scope' ,'product'];

  function ProductEditCtrl($scope, product) {
    $scope.product = product;

    if ($scope.product && $scope.product.productId) {
      $scope.title = "Edit: " + $scope.product.productName;
    }
    else {
      $scope.title = "New Product"
    }
  }
}());