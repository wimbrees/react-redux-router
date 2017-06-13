module.exports = {
    entry: './src/app.js',
    devtool: 'source-map',
    output: {
        path: 'build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};