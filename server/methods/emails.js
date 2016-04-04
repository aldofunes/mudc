Meteor.methods({
    sendContactEmail: function (doc) {
        Email.send({
            to: "mudc.cem@gmail.com",
            from: doc.email,
            subject: "New message received from " + doc.name,
            text: doc.message
        });
    },
    sendScholarshipEmail: function (doc) {
        var text = "Institution: " + doc.name + "\n\n";
        text += "Explanation: " + doc.explanation;

        Email.send({
            to: "mudc.cem@gmail.com",
            from: "scholarships@mudc.mx",
            subject: "New scholarship application received from " + doc.name,
            text: text
        });
    },
    sendRegistrationEmail: function (info) {

        var text = "Institution: " + info.profile.university + "\n\n";
        text += "Teams registered: " + info.profile.teams + "\n\n";
        text += "Email: " + info.email + "\n\n";

        Email.send({
            to: "mudc.cem@gmail.com",
            from: "email@mudc.mx",
            subject: "New institution registered " + info.profile.university,
            text: text
        });

    }
});