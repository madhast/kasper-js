define(function () {

    function usersSrv () {
        function getFlatUsersList (data) {

            var usersList = [];

            data.forEach(function (groupItem) {
                var groupName = groupItem.name;

                var tmpUsersList = groupItem.users.map(function (userItem) {
                    userItem.groupName = groupName;
                    return userItem;
                });

                usersList = usersList.concat(tmpUsersList);
            });

            return usersList;
        }
        
        return {
            getFlatUsersList: getFlatUsersList
        };
    }

    return usersSrv;

});
