module.exports = {
    entry: './index.ts',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: [
                    /node_modules/,
                    /typings/
                ],
                loaders: ['babel']
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: ['ts']
            }
        ]
    },
    watch: true
};
