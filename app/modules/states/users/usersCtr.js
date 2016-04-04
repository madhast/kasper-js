define(function () {

    function usersCtr ($scope, usersResolve, usersSrv) {
        $scope.pagename = 'User list';

        $scope.viewModes = [
            { mode: 'list', title: 'Таблица' },
            { mode: 'plate', title: 'Плитки' },
            { mode: 'trello', title: 'Трелло' }
        ];

        $scope.activeViewMode = $scope.viewModes[0];

        $scope.usersGroups = usersResolve;
        $scope.users = usersSrv.getFlatUsersList(usersResolve);
    }

    return usersCtr;

});
