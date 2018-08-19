(function () {
"use strict";

angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope) {
        $scope.name = {
            first: "Harry",
            last: "Potter"
        };
        $scope.message = "Hello World!!!";
    });
})();