'use strict';

angular.module('myApp.view1', ['ngRoute','api.users'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])



// .controller('View1Ctrl', ['api.users', function(Users) {

// 	$scope.users = Users.all;

// }]);

.controller('View1Ctrl', ['$scope', 'Users', function($scope, Users) {

	//$scope.users = Users.all();


    $scope.LoadUsers = function() {
        $scope.users = Users.all();
    }

    $scope.LoadUsers();

}]);