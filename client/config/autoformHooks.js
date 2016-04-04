AutoForm.hooks({
    contactInsertForm: {
        onSubmit: function(insertDoc) {
            //console.log(insertDoc);
            Meteor.call("sendContactEmail", insertDoc);
            this.done();
        }
    },
    scholarshipInsertForm: {
        onSubmit: function(insertDoc) {
            //console.log(insertDoc);
            Meteor.call("sendScholarshipEmail", insertDoc);
            this.done();
        }
    }
});