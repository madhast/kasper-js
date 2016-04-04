define(function () {

    function usersListDir () {
        return {
            link: lnk,
            templateUrl: '/app/modules/states/users/usersList.html',
            scope: {
                users: '='
            }
        };

        function lnk (scope, attrs, elem) {

        }
    }
    
    return usersListDir;
    
});
