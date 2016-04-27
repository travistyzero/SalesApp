(function() {
  var customersService = function($http) {

    this.getCustomers = function() {
      return $http.get('http://localhost:3000/api/customers');
    };

    this.getCustomer = function(customerId) {
      return $http.get('http://localhost:3000/api/customers/' + customerId);
    };

    this.deleteCustomer = function(customerId) {
      return $http.delete('http://localhost:3000/api/customers/' + customerId);
    };

    this.createCustomer = function(name, city) {
      return $http.post('http://localhost:3000/api/customers/', {
        name: name,
        city: city
      });
    };

    // Update customer orders
    this.updateCustomerOrders = function(customerId, orders) {
      return $http.put('http://localhost:3000/api/customers/' + customerId + '/orders', orders);
    };

    // Reset customers
    this.resetCustomers = function() {
      return $http.delete('http://localhost:3000/api/customers');
    };

  };

  customersService.$inject = ['$http'];

  angular.module('customersApp').service('customersService', customersService);

}());
