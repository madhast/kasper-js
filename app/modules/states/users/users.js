define([
    '/app/modules/states/users/usersCtr.js',
    '/app/modules/states/users/usersRes.js',
    '/app/modules/states/users/usersSrv.js',
    '/app/modules/states/users/usersConf.js',

    '/app/modules/states/users/usersListDir.js',
    '/app/modules/states/users/usersPlateDir.js',
    '/app/modules/states/users/usersTrelloDir.js'
], function (
    usersCtr,
    usersRes,
    usersSrv,
    usersConf,

    usersListDir,
    usersPlateDir,
    usersTrelloDir
) {

    angular.module('users', ['ngRoute', 'ui.router', 'ngResource']);

    angular.module('users').config(usersConf);
    angular.module('users').factory('usersRes', usersRes);
    angular.module('users').service('usersSrv', usersSrv);
    angular.module('users').controller('usersCtr', usersCtr);

    angular.module('users').directive('usersListDir', usersListDir);
    angular.module('users').directive('usersPlateDir', usersPlateDir);
    angular.module('users').directive('usersTrelloDir', usersTrelloDir);

});
