'use strict';
angular.module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])
    .controller('View1Ctrl', ['$scope', '$log', function($scope) {
        $scope.cameras = [{
            name: "Study",
            video: "http://tiorob.duckdns.org/study/videostream.cgi?rate=0",
            image: "http://tiorob.duckdns.org/study/snapshot.cgi"
        }, {
            name: "Garage",
            video: "http://tiorob.duckdns.org/garage/videostream.cgi?rate=0",
            image: "http://tiorob.duckdns.org/garage/snapshot.cgi"
        }];
        $scope.toggleVideo = function($event, image, video) {
            $event.currentTarget.src === image ? $event.currentTarget.src = video : $event.currentTarget.src = image;
        };
    }]);
