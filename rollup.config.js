import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
    input: 'src/index.js', // Entry point of your application
    output: {
        dir: 'dist',
        format: 'cjs', // CommonJS format, can be 'esm' for ES modules
        sourcemap: true
    },
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react']
        }),
        postcss({
            extensions: ['.css']
        }),
        terser() // Minifies the output
    ]
};
