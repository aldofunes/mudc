Scholarships = new Meteor.Collection('scholarships');

Scholarships.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Institution Name",
        max: 200
    },
    explanation: {
        type: String,
        label: "Explanation",
        autoform: {
            rows: 6
        }
    }
}));



