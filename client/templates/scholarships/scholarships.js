Template.scholarships.helpers({
    //add you helpers here
});

Template.scholarships.events({
    //add your events here
    "submit #insertScholarshipForm": function (event) {
        event.preventDefault();
        values = {
            name: event.target.name.value,
            explanation: event.target.explanation.value
        };
        Meteor.call("insertScholarship", values);
    }
});

Template.scholarships.onCreated(function () {
    //add your statement here
});

Template.scholarships.onRendered(function () {
    //add your statement here
});

Template.scholarships.onDestroyed(function () {
    //add your statement here
});

