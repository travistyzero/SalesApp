(function() {
  CustomersController.$inject = ['$scope'];

  function CustomersController($scope, $routeProvider) {
    $scope.reverse = false;
    $scope.sortBy = 'name';

    $scope.customers = [{
      id: 1,
      joined: '2012-10-09',
      name: 'Travis',
      city: 'Brisbane',
      orderTotal: 134.435,
      orders: [{
        id: 1,
        product: 'Shoes',
        total: 123.435
      }]
    }, {
      id: 2,
      joined: '2013-11-02',
      name: 'John',
      city: 'Melbourne',
      orderTotal: 414.437,
      orders: [{
        id: 2,
        product: 'Pants',
        total: 314.437
      }, {
        id: 3,
        product: 'Belt',
        total: 100
      }]
    }, {
      id: 3,
      joined: '2007-10-19',
      name: 'Jack',
      city: 'Perth',
      orderTotal: 199.211,
      orders: [{
        id: 4,
        product: 'Hat',
        total: 99.211
      }, {
        id: 3,
        product: 'Belt',
        total: 100
      }]
    }];
  }

  angular.module('customersApp').controller('CustomersController', CustomersController);

}());
