    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when("/home", {
                templateUrl : 'home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when("/about", {
                templateUrl : 'about.html',
                controller  : 'aboutController'
            })

            .otherwise({redirectTo: '/'});
            // route for the contact page
            
    });
        scotchApp.controller('mainController', function($scope) {
        
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('aboutController', function($scope) {
       $scope.message = 'Look! I am an about page.';
    });

    


