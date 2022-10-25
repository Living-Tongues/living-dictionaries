import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

import UnoCSS from 'temp-s-p-u';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [
    preprocess(),
    mdsvex(mdsvexConfig),
    UnoCSS({ options: { classPrefix: 'ldp-' } }),
  ],

  kit: {
    adapter: adapter(),
  },
  
  onwarn: (warning, handler) => {
    if (warning.code.startsWith('a11y-')) {
      return;
    }
    handler(warning);
  },

  vitePlugin: {
		experimental: {
			inspector: {
				holdMode: true,
			}
		}
	}
};

export default config;
