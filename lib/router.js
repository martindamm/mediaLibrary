Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route("/", {
    name: "homeIndex"
});

Router.route("/vinyl", {
    name: "vinylShow"
});

Router.route("/cd", {
    name: "cdShow"
})

Router.route("/dvd", {
    name: "dvdShow"
})