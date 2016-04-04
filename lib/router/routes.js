Router.route("/", function () {
    this.render("home");
}, {
    name: "home"
});

Router.route("team");
Router.route("team/academic", {
    name: "team.academic"
});
Router.route("team/organizing", {
    name: "team.organizing"
});

Router.route("tournament");
Router.route("tournament/schedule", {
    name: "tournament.schedule"
});
Router.route("tournament/venue", {
    name: "tournament.venue"
});

Router.route("registration");

Router.route("scholarships");

Router.route("contact");

Router.route("livestream");

Router.route("results");

