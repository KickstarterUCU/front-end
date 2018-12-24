module.exports = {
    entry: {
        project: __dirname + "/src/project.js",
        main: __dirname + "/src/index.js"
    },

    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    }
};