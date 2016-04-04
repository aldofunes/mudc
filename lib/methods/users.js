Meteor.methods({
    updateUser: function (values) {
        Meteor.users.update(
            { _id: Meteor.userId() },
            { $set: {
                emails: [{
                    address: values.email
                }],
                profile: {
                    university: values.university,
                    teams: values.teams
                }
            }}
        );
    }
});