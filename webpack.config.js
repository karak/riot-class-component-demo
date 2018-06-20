module.exports = {
    mode: 'development',
    entry: __dirname + '/src/index.js',
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: ['to-string-loader', 'html-loader'],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['to-string-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};
