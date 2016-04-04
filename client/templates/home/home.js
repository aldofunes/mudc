Template.home.helpers({
});

Template.home.events({
    //add your events here
});

Template.home.onCreated(function () {
    //add your statement here
});

Template.home.onRendered(function () {
    //add your statement here
    $('#countdown').countdown('2015/11/13 10:00:00', function (event) {
        $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
    });

    // Twitter widget
    !function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = p + "://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, "script", "twitter-wjs");
});

Template.home.onDestroyed(function () {
    //add your statement here
});

