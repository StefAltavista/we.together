const path = require("path");
const HTMLwebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: [
        "./client/src/start.js",
        // path.join(__dirname, "client", "css", "style.css"),
    ],
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    plugins: [
        new HTMLwebpackPlugin({ template: "./client/src/index.html" }),
        // new MiniCssExtractPlugin(),
    ],
    devServer: {
        static: path.join(__dirname, "client"),
        proxy: {
            "/": {
                target: "http://localhost:5001",
            },
        },
        port: "5000",
    },

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
