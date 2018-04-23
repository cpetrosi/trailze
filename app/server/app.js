const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const historyApiFallback = require("connect-history-api-fallback");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const config = require("../config/config");
const webpackConfig = require("../webpack.config");

const port  = process.env.PORT || 8080;


// Configuration
// ================================================================================================


const db = require("../db/index");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Backend API routes
require("./routes/api");

const compiler = webpack(webpackConfig);

app.use(historyApiFallback({
    verbose: false
}));

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, "../client/public"),
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
    }
}));

app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.resolve(__dirname, "../dist")));

app.use("/client", express.static("client"));

app.listen(port, "0.0.0.0", (err) => {
    if (err) {
        console.log(err);
    }
    console.info(">>> 🌎 Open http://0.0.0.0:%s/ in your browser.", port);
});

module.exports = app;
