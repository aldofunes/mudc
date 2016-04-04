Meteor.methods({
    insertRegistration: function (values) {
        console.log(values);
        Registrations.insert({
            name: values.name,
            city: values.city,
            teams: values.teams,
            createdAt: new Date()
        });
    },
    deleteRegistration: function (taskId) {
        Tasks.remove(taskId);
    },
    updateRegistration: function (taskId, setChecked) {
        Tasks.update(taskId, { $set: { checked: setChecked} });
    }
});