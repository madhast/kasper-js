define(function () {
    angular.module('welcome', ['ngRoute', 'ui.router']);
    
    
    angular.module('welcome').config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('/welcome/', '/welcome');
            $stateProvider.state('welcome', {
                url: '/welcome',
                controller: 'WelcomeCtr',
                templateUrl: '/app/modules/states/welcome/welcome.html'
            });
        }
    ]);
    
    
    angular.module('welcome').controller('WelcomeCtr', WelcomeCtr);
    
    function WelcomeCtr ($scope) { }
});
