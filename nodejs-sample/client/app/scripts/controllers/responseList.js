

var myapp = angular.module('responseApp', []);
myapp.filter('pagination', function () {
    return function (input, start) {
        start = +start;
        return input.slice(start);
    };
});

myapp.run(function ($rootScope) {
    $rootScope.baseUrl = 'https://ihg-rewards-game-api.herokuapp.com/';
});


myapp.controller('responseListCtrl', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {

    $scope.showData = function () {

        $scope.curPage = 0;
        $scope.pageSize = 5;

        //Get response data from api
        $http({ method: 'GET', url: $rootScope.baseUrl + 'responses' }).success(function (data) {
            for (var i = 0; i < data.length; i++) {
                debugger;
                var Date = data[i].responseDate;
                var splitDate = Date.split(' ');
                data[i].responseDate = splitDate[1] + ' ' + splitDate[2];
                $scope.datalists = data;
            }
        });

        //togle response text div and buttons
        $scope.toggelDiv = function (id) {

            $('#img' + id).attr('src', function (i, oldSrc) {
                return oldSrc == 'images/bot-arrow.png' ? 'images/top-arrow.png' : 'images/bot-arrow.png';
            });

            $(".innerData[id!='" + id + "']").hide();
            $("#" + id).toggle();
        };

        $scope.numberOfPages = function () {
            return Math.ceil($scope.datalists.length / $scope.pageSize);
        };
    }

} ]);



