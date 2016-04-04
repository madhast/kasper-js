define(function () {

    function usersConf ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/users/', '/users');
        $stateProvider.state('users', {
            url: '/users',
            controller: 'usersCtr',
            templateUrl: '/app/modules/states/users/users.html',
            resolve: {
                usersResolve: function (usersRes) {
                    return usersRes.get().$promise;
                }
            }
        });
    }

    return usersConf;

});
