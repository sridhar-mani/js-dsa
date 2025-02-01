import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'main.ts', 
    output: [
      {
        file: 'dist/linked-list-lib.cjs.js',  
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/linked-list-lib.esm.js',  
        format: 'esm',
        sourcemap: true
      },
      {
        file: 'dist/linked-list-lib.umd.js',  
        format: 'umd',
        name: 'LinkedListLib',
        sourcemap: true
      }
    ],
    plugins: [
      nodeResolve(),   
      commonjs(),      
      typescript()     
    ]
  }
];
