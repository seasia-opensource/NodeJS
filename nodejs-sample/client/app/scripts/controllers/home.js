'use strict';

/**
* @ngdoc function
* @name clientApp.controller:HomeCtrl
* @description
* # HomeCtrl
* Controller of the clientApp
*/
$('body').on('click', function (e) {
    debugger;
    $('.popup').each(function () {
        debugger;
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popup').has(e.target).length === 0) {
            $(this).modal('hide');
        }
    });
});

angular.module('clientApp')
    .controller('HomeCtrl', ['$scope', '$rootScope', '$sce', '$http', function ($scope, $rootScope, $sce, $http) {
        $scope.responses = [];
        $scope.currentQuestion = {};
        $scope.currentScenario = {};
        $scope.currentChoice = '';
        $scope.reasonText = '';
        $scope.isLead = false;

        $('#initialModal').modal('show');
        //Locd all scenarios
        $http({ method: 'GET', url: $rootScope.baseUrl + "scenarios" }).
                    success(function (data) {

                        $scope.scenarios = data;
                    });

        //Load first question for selected scenario
        $scope.DisplayQuestion = function (scenarioId) {

            for (var i = 0; i < $scope.scenarios.length; i++) {
                if ($scope.scenarios[i].id == scenarioId) {
                    $scope.currentScenario = $scope.scenarios[i];
                    $scope.currentQuestion = $scope.scenarios[i].questions[0];
                    break;
                }
            }

        };

        //Record response text for selected choice
        $scope.RecordChoice = function (choice) {
            $scope.currentChoice = choice;
            $('#questionModal').modal('hide');

        };

        //Postback response to api for lead user
        //And send back to home page if current question is not linked to another question
        $scope.RecordResponse = function () {

            var choiceText = $scope.currentChoice;
            $scope.responses.push({ questionText: $scope.currentQuestion.title, choiceText: $scope.currentChoice.title, reasonText: $scope.reasonText })

            if ($scope.currentChoice.relatedQuestionId != null) {
                $http({ method: 'GET', url: $rootScope.baseUrl + "questions/" + $scope.currentChoice.relatedQuestionId }).
                    success(function (data) {
                        if (data != null && data.length > 0) {
                            $scope.currentQuestion = data[0];
                            $('#questionModal').modal('show');
                        }
                        else {
                            $scope.currentQuestion = null;
                        }
                    });
            }
            else {
                $scope.currentQuestion = null;

                if ($scope.isLead) {

                    var responseData = { playerName: $scope.playerName, scenarioName: $scope.currentScenario.title, responses: $scope.responses };
                    $('#' + $scope.currentScenario.id).attr("src", $scope.currentScenario.completedImage);

                    $http({ method: 'POST', url: $rootScope.baseUrl + "responses", data: responseData, headers: {
                        'Content-Type': 'application/json'
                    }
                    }).success(function (data) { });
                }
                $('#' + $scope.currentScenario.id).attr("src", $scope.currentScenario.completedImage);
                $("#summaryModal").modal('show');
            }
            $scope.reasonText = '';
        };

        $scope.ClearResponses = function () {
            $scope.responses = [];
        };

        
    }

  ]);

   