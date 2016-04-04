define(function () {
    
    function usersPlateDir () {
        return {
            link: lnk,
            templateUrl: '/app/modules/states/users/usersPlate.html',
            scope: {
                users: '='
            }
        };

        function lnk (scope, attrs, elem) {
            console.log('Plate');
        }
    }
    
    return usersPlateDir;
    
});
