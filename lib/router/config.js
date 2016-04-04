Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.plugin('ensureSignedIn', {
    only: ['registration', 'scholarships']
});