(function () {
"use strict";

angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast) {
        classifiedsFactory.getClassifieds().then(function(data){
            $scope.classifieds = data.data;
        });

        var contact = {
            name: "Luke Skywalker",
            phone: "(555) 555555",
            email: "luke.skywalker@gmail.com"
        }

        $scope.openSidebar = function() {
            $mdSidenav('left').open();
        }

        $scope.closeSidebar = function() {
            $mdSidenav('left').close();
        }

        $scope.saveClassified = function(classified) { /* passing in an object from the ng-model object specified in the html*/
            if(classified) {
                classified.contact = contact; 
                $scope.classifieds.push(classified);
                $scope.classified = {};
                $scope.closeSidebar();
                $mdToast.show(
                    $mdToast.simple()
                    .content("Classified saved!")
                    .position('top, right')
                    .hideDelay(3000)
                );
            }
        }
    });
})();