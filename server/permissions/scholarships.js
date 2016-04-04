Scholarships.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function (userId) {
        return Meteor.userId() === userId;
    }
});