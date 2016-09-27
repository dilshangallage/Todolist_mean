describe('priorityController', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
  describe('$scope.gap', function() {
    it('sets the priority to "High" if the datedif is < 8 dates', function() {
      var $scope = {};
      var controller = $controller('priorityController', { $scope: $scope });
      $scope.selectdate=27;
      $scope.currentdate=20;
      $scope.gap();
      expect($scope.priority).toEqual('Low');
    });
    it('sets the priority to "Normal" if the datedif is < 15 dates', function() {
      var $scope = {};
      var controller = $controller('priorityController', { $scope: $scope });
      $scope.selectdate=27;
      $scope.currentdate=10;
      $scope.gap();
      expect($scope.priority).toEqual('Low');
    });
    it('sets the priority to "Low" if the datedif is > 14 dates', function() {
      var $scope = {};
      var controller = $controller('priorityController', { $scope: $scope });
      $scope.selectdate=21;
      $scope.currentdate=20;
      $scope.gap();
      expect($scope.priority).toEqual('Low');
    });
  });
});
