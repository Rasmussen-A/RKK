({
    appDir: "../../",
    baseUrl: "assets/javascripts/",
    fileExclusionRegExp: /.git/,
    fileExclusionRegExp: /deploy.js/,
    dir: "../../../RKK-Deploy/public_html/",
    paths: {
        jquery: "empty:",
        underscore: "empty:",
        backbone: "empty:",
        bootstrap: "empty:",
        leaflet: "empty:",
        templates: "../templates" },
    modules: [{ name: "main" }] })