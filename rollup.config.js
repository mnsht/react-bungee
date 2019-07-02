import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.browser,
      globals: { react: 'React' },
      format: 'umd',
      name: 'react-bungee'
    },
    {
      file: pkg.main,
      globals: { react: 'React' },
      format: 'cjs',
      name: 'react-bungee'
    },
    {
      file: pkg.module,
      globals: { react: 'React' },
      format: 'es'
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    peerDepsExternal(),
    babel({ exclude: 'node_modules/**' }),
    resolve(),
    commonjs(),
    filesize()
  ]
};
