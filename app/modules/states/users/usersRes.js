define(function () {

    function usersRes ($resource, $q) {
        return $resource('http://localhost:8888/api/users.json', {}, {
            get: {
                method: 'GET',
                isArray: true
            }
        });
    }

    return usersRes;

});
