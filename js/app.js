var app = angular.module('instagramModule', []);
app.controller('myCtrl', function ($scope, $http, $timeout) {
    $scope.submitTag = function (tagName) {
        $scope.tagName = tagName;

        var url = "https://api.instagram.com/v1/tags/" + tagName + "/media/recent";
        var request = {
            outputMode: 'json',
            callback: 'JSON_CALLBACK',
            client_id: '53541f77dbab454392d271e749fcb828'
        };

        $http({
                method: 'JSONP',
                url: url,
                params: request
            })
            .then(function (result) {
                    console.log(result);
                    $scope.results = result.data.data;
                    console.log(result.data);
                    if ($scope.results.length === 0) {
                        alert("There are no results with this tag! :(")
                    }
                },
                function (result) {
                    alert('Oops!! There was an error!');
                });
    };
});
