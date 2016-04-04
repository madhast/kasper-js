define(function () {

    function usersTrelloDir () {
        return {
            link: lnk,
            templateUrl: '/app/modules/states/users/usersTrello.html',
            scope: {
                users: '=',
                groups: '='
            }
        };

        function lnk (scope, attrs, elem) {
            
        }
    }
    
    return usersTrelloDir;
    
});
