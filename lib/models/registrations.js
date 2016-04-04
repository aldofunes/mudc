Registrations = new Meteor.Collection('registrations');

Registrations.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Institution Name",
        max: 200
    },
    city: {
        type: String,
        label: "City"
    },
    teams: {
        type: Number,
        label: "Number of teams to register",
        min: 0,
        max: 10
    },
    createdAt: {
        type: Date
    }
}));



