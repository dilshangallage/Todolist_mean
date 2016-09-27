var app = angular.module('app', []);
//angular.module('app', [])
app.controller('priorityController', function priorityController($scope) {
  //$scope.priority = '';
  $scope.selectdate=0;
  $scope.currentdate=0;
  $scope.gap = function() {
    var dif =$scope.selectdate-$scope.currentdate;
    if (dif < 8) {
      $scope.priority = 'High';
    } else if (dif <15) {
      $scope.priority = 'Normal';
    }else {
      $scope.priority = 'Low';
    }
  };
});
