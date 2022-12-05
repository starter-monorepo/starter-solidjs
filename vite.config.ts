/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    solidPlugin(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'solid-js',
      ]
    }),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),

  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
