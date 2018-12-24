module.exports = {
    entry: {
        project: __dirname + "/src/project.js",
        main: __dirname + "/src/index.js",
        balance: __dirname + "/src/balance.js",
    },

    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    }
};