(function () {
"use strict";

angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {
        classifiedsFactory.getClassifieds().then(function(data){
            $scope.classifieds = data.data;
            $scope.categories = getCategories($scope.classifieds);
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
                showToast("Classified saved!");
            }
        }

        $scope.editClassified = function(classified) {
            $scope.editing = true;
            $scope.openSidebar();
            $scope.classified = classified; /*This classified on scope can be accessed because it is on ng-model */
        }

        $scope.deleteClassified = function(event, classified) {
            var confirmDialog = $mdDialog.confirm()
                .title('Are you sure you want to delete ' + classified.title + '?')
                .ok('Yup')
                .cancel('Nope')
                .targetEvent(event);         /**Like a listener event */

            $mdDialog.show(confirmDialog).then(function() {
                var index = $scope.classifieds.indexOf(classified);
                $scope.classifieds.splice(index, 1);
            }, function() {

            });
        }

        $scope.saveEdit = function() {
            $scope.editing = false;
            $scope.classified = {};
            $scope.closeSidebar();
            showToast("Edit saved!");
        }

        function showToast(message) {
            $mdToast.show(
                $mdToast.simple()
                .content(message)
                .position('top, right')
                .hideDelay(3000)
            );
        }

        function getCategories(classifieds) {
            var categories = [];
            angular.forEach(classifieds, function(item) {
                angular.forEach(item.categories, function(category){
                    categories.push(category);
                })
            })
            return _.uniq(categories); /**Lodash's unique function to remove duplicates form array */
        }
    });
})();