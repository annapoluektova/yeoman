'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
/*angular.module('yeomanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });*/
angular.module('yeomanApp')
  .controller('AboutCtrl', function ($scope) {

    $scope.todos = [];
    $scope.todo = {created_by: '', text: '', created_at: ''};

    $scope.addTodo = function () {
      $scope.todo.created_at = Date.now();
      $scope.todos.push($scope.todo);
      $scope.todo = {created_by: '', text: '', created_at: ''};
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

  });
