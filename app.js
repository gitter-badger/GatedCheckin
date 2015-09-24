angular.module('DS',[]).controller('homeController', ['$scope', function ($scope) {
    $scope.book = {
        title: 'Programming in C',
        author: 'Dennis Ritchie'
    };
}]);