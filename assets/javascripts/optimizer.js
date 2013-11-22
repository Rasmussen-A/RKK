// To build main-built.js just exec 'r.js -o optimizer.js'

({
    baseUrl: ".",
    paths: {
        jquery: "empty:",
        underscore: "empty:",
        backbone: "empty:",
        bootstrap: "empty:",
        templates: "../templates"
    },
    name: "main",
    out: "main-built.js"
})