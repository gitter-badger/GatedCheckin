angular.module("DS",[]).controller("homeController", ["$scope", function ($scope) {
    "use strict";
    $scope.book = {
        title: "Programming in C",
        author: "Dennis Ritchie"
    };
}]);