import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type Plugin } from 'vite';
import UnoCSS from '@unocss/svelte-scoped/vite';
import { kitbook } from 'kitbook/plugins/vite';
import kitbookConfig from './kitbook.config';
import { readFileSync } from 'fs';

export default defineConfig({
  plugins: [
    kitbook(kitbookConfig),
    UnoCSS({
      injectReset: '@unocss/reset/tailwind.css',
    }),
    sveltekit(),
    rawFonts(['.ttf']),
  ],
  server: {
    port: 3041,
    strictPort: false,
  },
  build: {
    target: 'es2015',
  },
  define: getReplacements(),
  optimizeDeps: {
    include: [ // if the dependency is large with many internal modules or is CommonJS then include it
      // 'firebase/functions',
      // 'xss',
      // 'kitbook',
      // 'kitbook/viewer/load-viewer',
      // 'firebase/firestore',
      // 'firebase/app',
      // 'firebase/firestore/lite',
      // 'firebase/auth',
      // 'firebase/performance',
      // '@turf/turf',
      // 'instantsearch.js/es/widgets/index.js', 'instantsearch.js/es/connectors',
      // 'algoliasearch',
      // 'instantsearch.js',
    ],
    exclude: [ // if the dependency is small, ESM, no CJS imports, then exclude and let the browser load directly - https://vitejs.dev/guide/dep-pre-bundling.html
      'sveltefirets',
      'svelte-pieces',
      '@sentry/browser',
    ],
  },
});

function getReplacements() {
  if (typeof process !== 'undefined' && process.env.VERCEL_ANALYTICS_ID) {
    return {
      'import.meta.vitest': false,
      'REPLACED_WITH_VERCEL_ANALYTICS_ID': process.env.VERCEL_ANALYTICS_ID,
    }
  }

  return {
    'import.meta.vitest': false,
  }
}

function rawFonts(extensions: string[]): Plugin {
  return {
    name: 'vite-plugin-raw-fonts',
    resolveId(id) {
      return extensions.some((ext) => id.endsWith(ext)) ? id : null;
    },
    transform(code, id) {
      if (extensions.some((ext) => id.endsWith(ext))) {
        const buffer = readFileSync(id);
        return { code: `export default ${JSON.stringify(buffer)}`, map: null };
      }
    }
  };
}
