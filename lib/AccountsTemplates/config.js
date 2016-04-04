var sendRegistrationEmail = function(password, info){
    Meteor.call("sendRegistrationEmail", info);
};

AccountsTemplates.configure({
    // Behavior
    defaultState: "signUp",
    sendVerificationEmail: false,

    // Client-side Validation
    continuousValidation: true,
    negativeFeedback: true,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    preSignUpHook: sendRegistrationEmail,

    // Texts
    texts: {
        title: {
            signUp: "Register your institution"
        },
        button: {
            signUp: "Register"
        },
        errors: {
            mustBeLoggedIn: "Please register your institution"
        }
    }
});