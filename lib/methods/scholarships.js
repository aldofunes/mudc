Meteor.methods({
    insertScholarship: function (values) {
        var scholarship = Scholarships.insert({
            name: values.name,
            explanation: values.explanation,
            createdAt: new Date()
        });
        if (!scholarship) {
            throw new Meteor.Error("The scholarship request was not received successfully")
        }
    },
    deleteScholarship: function (taskId) {
        Tasks.remove(taskId);
    },
    updateScholarship: function (taskId, setChecked) {
        Tasks.update(taskId, { $set: { checked: setChecked} });
    }
});