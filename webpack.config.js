var path = require('path');

module.exports = {
    entry: './src/index',
    output: {
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
                include: path.resolve(__dirname, "src"),
                loaders: ['babel', 'ts']
            }
        ]
    },
    watch: false
};
