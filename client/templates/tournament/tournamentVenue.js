Template.tournamentVenue.helpers({
    //add you helpers here
});

Template.tournamentVenue.events({
    //add your events here
});

Template.tournamentVenue.onCreated(function () {
    //add your statement here
});

Template.tournamentVenue.onRendered(function () {
    //add your statement here
    $("#itesmSlider").owlCarousel({
        items: 1,
        autoPlay: 3000
    });
});

Template.tournamentVenue.onDestroyed(function () {
    //add your statement here
});

