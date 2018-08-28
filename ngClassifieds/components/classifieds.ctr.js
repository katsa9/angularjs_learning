(function () {
"use strict";

angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav) {
        classifiedsFactory.getClassifieds().then(function(data){
            $scope.classifieds = data.data;
        });

        $scope.openSidebar = function() {
            $mdSidenav('left').open();
        }

        $scope.closeSidebar = function() {
            $mdSidenav('left').close();
        }

        $scope.saveClassified = function(classified) { /* passing in an object from the ng-model object specified in the html*/
            if(classified) {
                $scope.classifieds.push(classified);
                $scope.classified = {};
                $scope.closeSidebar();
            }
        }
    });
})();