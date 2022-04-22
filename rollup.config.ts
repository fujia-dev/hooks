// import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import sourceMaps from 'rollup-plugin-sourcemaps';
import ts from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';

import pkg from './package.json';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const pkg = require('./package.json');
const input = './src/index.ts';

const rollupConfig = [
  {
    input,
    output: [
      {
        file: pkg.main,
        name: pkg.name,
        format: 'cjs',
        exports: 'named', // export mode
      },
      {
        file: pkg.module,
        format: 'esm',
        exports: 'named',
      },
    ],
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: ['react', 'react-dom'],
    watch: {
      include: 'src/**',
    },
    plugins: [
      // Allow json resolution
      json(),
      // Compile TypeScript files
      ts({
        clean: true,
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          compilerOptions: {
            module: 'esnext',
            target: 'es5',
          },
        },
      }),
      // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
      commonjs(),
      terser(),
      // Allow node_modules resolution, so you can use 'external' to control
      // which external modules to include in the bundle
      // https://github.com/rollup/rollup-plugin-node-resolve#usage
      // resolve(),

      // Resolve source maps to the original source
      // sourceMaps(),
    ],
  },
];

export default rollupConfig;
