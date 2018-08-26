(function () {
"use strict";

angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav) {
        classifiedsFactory.getClassifieds().then(function(data){
            $scope.classifieds = data.data;
        });

        $scope.openSidebar = function() {

        }
    });
})();