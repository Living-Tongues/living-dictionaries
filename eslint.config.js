// To run automatically on commit, add `simple-git-hooks` and `lint-staged` then run `npx simple-git-hooks` once. After that all commits will be linted.

// @ts-check
import { defineFlatConfig } from 'eslint-define-config';
import jsEslintPlugin from '@eslint/js';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
// @ts-ignore
import typescriptParser from '@typescript-eslint/parser';
import sveltePlugin from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import globals from 'globals';
import { scriptExceptions } from './lint/allowScriptLogs.js';

// @ts-ignore
export default defineFlatConfig([
  {
    // If used without any other keys in the configuration object, then the patterns act as global ignores.
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/lib/**',
      '.git/**',
      '**/.svelte-kit/**',
      // pnpm-lock.yaml
      'packages/scripts/import/old**',
    ],
  },
  jsEslintPlugin.configs.recommended, // new way to do 'eslint:recommended'
  {
    rules: {
      'indent': ['error', 2]
    }
  },
  {
    files: ['**/*.ts', '**/*.js', '**/*.svelte', '**/*.svx'],
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        extraFileExtensions: ['.svelte', '.svx'],
        //   tsconfigRootDir: process.cwd(),
        //   project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        ...globals.worker,
        ...globals.jest,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    rules: {
      ...tsEslintPlugin.configs.recommended?.rules,
      ...tsEslintPlugin.configs.stylistic?.rules,
      // Possibly update to this in the future:
      // ...tsEslint.configs['recommended-type-checked']?.rules,
      // ...tsEslint.configs['stylistic-type-checked']?.rules,
      '@typescript-eslint/sort-type-constituents': 'off', // prefer logical rather than alphabetical sorting
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          'argsIgnorePattern': '^_',
          'caughtErrors': 'all',
          'ignoreRestSiblings': true,
        },
      ],
      '@typescript-eslint/quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
      '@typescript-eslint/ban-ts-comment': 'off',
      semi: 'error',
      'prefer-const': 'error',
      'no-duplicate-imports': ['error', { 'includeExports': true }],
      'no-constant-binary-expression': 'error',
      'no-template-curly-in-string': 'error',
      'no-unmodified-loop-condition': 'error',
      'require-atomic-updates': 'error',
      'dot-notation': 'error',
      'no-else-return': 'error',
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'object-shorthand': 'error',
      
      
      // Warnings to move to errors in time:
      'curly': ['warn', 'multi-or-nest', 'consistent'],
      'no-await-in-loop': 'warn',
      'default-param-last': 'warn',
      'no-magic-numbers': ['warn', { 'ignore': [ 60 ] }],

      // Suggestions to try:
      // 'no-promise-executor-return': 'error', // has issue with "sleep" function
      // 'max-lines-per-function': ['error', 20]
      // 'no-return-await': 'error',



      // '@typescript-eslint/naming-convention': [
      //   'error',
      //   {
      //     'selector': 'default',
      //     'format': ['camelCase'],
      //     'leadingUnderscore': 'allow',
      //   },
      //   {
      //     'selector': 'default',
      //     'modifiers': ['const'],
      //     'format': ['camelCase', 'UPPER_CASE'],
      //     'leadingUnderscore': 'allow',
      //   },
      //   {
      //     'selector': ['typeLike', 'enumMember'],
      //     'format': ['PascalCase'],
      //   },
      //   {
      //     'selector': 'default',
      //     'modifiers': ['requiresQuotes'],
      //     'format': null,
      //   },
      // ],
    }
  },
  {
    // https://github.com/JNSMDT/token-generator/blob/main/eslint.config.js
    files: ['**/*.svelte', '**/*.svx'],
    plugins: {
      svelte: sveltePlugin
    },
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: typescriptParser,
      }
    },
    rules: {
      ...sveltePlugin.configs.base.overrides[0].rules,
      ...sveltePlugin.configs.recommended?.rules,
      'svelte/no-at-html-tags': ['warn'],
      'svelte/valid-compile': ['error', { 'ignoreWarnings': true }], // throws error on a11y issues
      'svelte/no-dom-manipulating': 'error',
      'svelte/html-quotes': 'error',
      'svelte/no-reactive-reassign': ['warn', { 'props': false }],
      'svelte/no-store-async': 'error',
      'svelte/require-store-reactive-access': 'error',
      'svelte/mustache-spacing': 'error',
      'svelte/button-has-type': 'error',
      'no-unused-expressions': 'off',
      // https://sveltejs.github.io/eslint-plugin-svelte/rules/
    },
    // globals: {
    //   '$$Generic': 'readonly',
    // }
  },
  scriptExceptions,
]);

// learn more
// https://github.com/AndreaPontrandolfo/sheriff
// https://github.dev/antfu/eslint-config
// https://github.com/enso-org/enso/blob/b2c1f97437870fa7b7a4d7c2d3630e2d2bd6fc2c/app/ide-desktop/eslint.config.js
// https://github.com/azat-io/eslint-config/blob/044959d8fef2acff50e252b8a238be933cd38eea/base/index.ts
// https://github.com/darkobits/eslint-plugin/blob/f55a64dc9038148f3227cda7ae4543dffcb0b14e/src/config-sets/ts
// https://github.com/azat-io/eslint-config/blob/044959d8fef2acff50e252b8a238be933cd38eea/react/index.ts