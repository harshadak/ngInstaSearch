var app = angular.module('instagramModule');
app.controller('myCtrl', function ($scope, $http, $timeout) {
    $scope.submit = function (tagName) {
        $scope.tagName = tagName;
    }
});
