(function () {
  "use strict";

  angular.module("productManagement")
    .controller("ProductDetailCtrl",
      ProductDetailCtrl);

  ProductDetailCtrl.$inject = ["$scope", "product"];

  function ProductDetailCtrl($scope, product) {

    $scope.product = product;
    $scope.title = "Product Detail: " + $scope.product.productName;

    if($scope.product.tags) {
      $scope.product.tagList = $scope.product.tags.toString();
    }

  }
}());