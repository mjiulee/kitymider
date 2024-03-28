import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import legacy from '@vitejs/plugin-legacy';
import { babel } from '@rollup/plugin-babel';

import vbabel from 'vite-plugin-babel';
import commonjs from 'vite-plugin-commonjs';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // targets: ['es2015'],
    outDir: "./dist",

    // rollupOptions: {
    // plugins: [
    //   babel({
    //     extensions: ['.js', '.ts', '.vue'],
    //     babelHelpers: 'runtime',
    //     plugins: ['@babel/plugin-transform-runtime'],
    //     presets: [
    //       [
    //         '@babel/preset-env',
    //         {
    //           useBuiltIns: false,
    //           targets: {
    //             browsers: ['last 2 versions', '> 1%', 'not ie <= 11'],
    //           },
    //         },
    //       ],
    //     ],
    //   }),
    // ],
    // },
    // external
    rollupOptions: {
      // external: ['kity', 'kityminder-core'],
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  server: {
    proxy: {
      //这里是通过请求/api 来转发到 https://api.pingping6.com/
      //假如你要请求https://api.*.com/a/a, 那么axios的url，可以配置为 /api/a/a
      // '/api': {
      //   target: 'http://192.168.3.26:3001/',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // }
    }
  }
});
