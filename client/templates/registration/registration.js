Template.registration.helpers({
    //add you helpers here
    userEmail: function () {
        return Meteor.user().emails[0].address;
    },
    cost: function () {
        var teams = Meteor.user().profile.teams;
        return parseInt(teams)*1500;
    },
    balance: function () {
        var teams = Meteor.user().profile.teams;
        var cost =  parseInt(teams)*1500;
        return cost - parseInt(Meteor.user().profile.paid);

    }
});

Template.registration.events({
    //add your events here
    "submit #updateInstitution": function (e) {
        e.preventDefault();
        var values = {
            university: e.target.university.value,
            teams: e.target.teams.value,
            email: e.target.email.value
        };
        Meteor.call("updateUser", values);
        return true;
    }
});

Template.registration.onCreated(function () {
    //add your statement here
});

Template.registration.onRendered(function () {
    //add your statement here
});

Template.registration.onDestroyed(function () {
    //add your statement here
});

