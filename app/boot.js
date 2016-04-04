require.config({
    paths: {
        'angular':              '/node_modules/angular/angular.min',
        'angular-route':        '/node_modules/angular-route/angular-route.min',
        'angular-ui-router':    '/node_modules/angular-ui-router/release/angular-ui-router.min',
        'angular-resource':     '/node_modules/angular-resource/angular-resource.min',

        'welcome':              '/app/modules/states/welcome/welcome',
        'users':                '/app/modules/states/users/users'
    },

    shim: {
        'app': {
            deps: ['users', 'welcome']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular-route']
        },
        'users': {
            deps: ['angular-ui-router', 'angular-resource']
        },
        'welcome': {
            deps: ['angular-ui-router']
        }
    }
});


require(['app'], function () {
    angular.bootstrap(document, ['app']);
});
