AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');
AccountsTemplates.addFields([
    {
        _id: 'university',
        type: 'text',
        displayName: "Name of the institution",
        placeholder: {
            signUp: "Write the full name of the institution"
        },
        required: true
    },
    {
        _id: 'teams',
        type: 'text',
        displayName: "Teams to register",
        placeholder: {
            signUp: "How many teams will participate?"
        },
        required: true,
        re: /^[1-9]$/,
        errStr: "Number between 1-9"
    },
    {
        _id: 'email',
        type: 'email',
        displayName: "Email",
        placeholder: {
            signUp: "Please provide us with an email to contact you"
        },
        required: true,
        re: /.+@(.+){2,}\.(.+){2,}/,
        errStr: 'Invalid email'
    },
    {
        _id: 'password',
        type: 'password',
        displayName: "Password",
        required: true,
        minLength: 6,
        re: /^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}/,
        errStr: 'At least 1 digit and 1 letter. Must start with letter'
    }
]);