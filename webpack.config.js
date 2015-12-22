module.exports = {
    context: __dirname + '/src',

    entry: './index',

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    resolve: {
        moduleDirectories: ['node_modules'],
        extensions: ['', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                include: __dirname + "/src",
                loaders: ['babel', 'ts']
            }
        ]
    },

    watch: false
};
