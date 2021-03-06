var webpack = require("webpack");
module.exports = {
    entry: {

        home:"./app/resources/assets/src/components/home/index.tsx",
        about:"./app/resources/assets/src/components/about/index.tsx",
        login:"./app/resources/assets/src/components/login/index.tsx",
        sample:"./app/resources/assets/src/components/sample/index.tsx",

    },
    output: {      
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js",
        path: __dirname + "/app/resources/assets/dist"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            filename: "commons.js",
            name: "commons"
        })
    ],

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};