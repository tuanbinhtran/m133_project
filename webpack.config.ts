import webpack, { Configuration } from 'webpack';
import path from 'path';

const config: Configuration = {
    mode: "none",
    entry: {
        index: './src/views/assets/index.ts',
        home: './src/views/assets/home.ts',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.ts'],
    },
    output: {
        path: path.resolve(__dirname, 'dist', 'views', 'assets'),
    }
};

export default config;
