import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from "@rollup/plugin-terser";

import packageJson from "./package.json" assert { type: "json" }

export default {
    input: 'src/index.js',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            strict: false
        }
    ],
    plugins: [
        babel({
            presets: ["@babel/preset-react"],
        }),
        peerDepsExternal(),
        resolve(),
        commonjs(),
        terser()
    ],
    // external: ['react', 'react-dom']
}