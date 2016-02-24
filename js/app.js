var app = angular.module('instagramModule');
app.controller('myCtrl', function ($scope, $http, $timeout) {
    $scope.submit = function (tagName) {
        $scope.tagName = tagName;

        var url = "https://api.instagram.com/v1/tags/" + tagName + "/media/recent";
        var request = {
            outputMode: 'json',
            callback: 'JSON_CALLBACK',
            client_id: '35d594c5f644432c98eb1cbd8dacefb6'
        };

        $http({
                method: 'JSON',
                url: url,
                params: request
            })
            .then(function (result) {
                    $scope.results = result.data.data;
                    if ($scope.results.length === 0) {
                        alert("There are no results with this tag! :(")
                    }
                },
                function (result) {
                    alert('Oops!! There was an error!');
                });
    };
});
