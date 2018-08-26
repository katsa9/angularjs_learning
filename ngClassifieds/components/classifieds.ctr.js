(function () {
"use strict";

angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory) {
        classifiedsFactory.getClassifieds().then(function(data){
            $scope.classifieds = data.data;
        });
    });
})();