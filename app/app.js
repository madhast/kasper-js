define(function () {
    angular.module('app', ['ngRoute', 'ui.router', 'users', 'welcome']);
    
    
    angular.module('app').config(['$urlRouterProvider', '$locationProvider',
        function ($urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/welcome');
        }
    ]);
});
