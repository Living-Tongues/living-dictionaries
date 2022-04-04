import fs from 'fs';
import { preprocess } from 'svelte/compiler';
import svelteDeepWind from './index.js';

test('Preprocessor handles ! in Component class names by escaping it in deep name', async () => {
  const result = await preprocess(
    `<script>
    import Button from './Button.svelte';
  </script>
  <Button class="!text-yellow-500 text-lg">
  Yellow
</Button>`,
    [svelteDeepWind()]
  );
  expect(result.code).toMatchInlineSnapshot(`
    "<script>
        import Button from './Button.svelte';
      </script>
      <Button class=\\"deep_\\\\!text-yellow-500_text-lg\\">
      Yellow
    </Button><style> :global(.deep_\\\\!text-yellow-500_text-lg) { @apply !text-yellow-500 text-lg; }</style>"
  `);
});

test('Preprocessor handles @apply and colons in style tag', async () => {
  const result = await preprocess(
    `<script>
    import Button from './Button.svelte';
  </script>
  <Button class="text-yellow-500">
  Yellow
</Button>
<style>
.foo {
  @apply focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded;
}
.bar {
  @apply focus:ring-primary-600;
}
</style>`,
    [svelteDeepWind()]
  );
  expect(result.code).toMatchInlineSnapshot(`
    "<script>
        import Button from './Button.svelte';
      </script>
      <Button class=\\"deep_text-yellow-500\\">
      Yellow
    </Button>
    <style> :global(.deep_text-yellow-500) { @apply text-yellow-500; }
    .foo {
      @apply focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded;
    }
    .bar {
      @apply focus:ring-primary-600;
    }
    </style>"
  `);
});

test('Preprocessor handles existing style tag', async () => {
  const inputFile = fs.readFileSync('./input/ButtonParent.svelte', 'utf-8');
  const result = await preprocess(inputFile, [svelteDeepWind()]);
  expect(result.code).toMatchInlineSnapshot(`
    "<script>
      import Button from './Button.svelte';
      const fruits = ['apple', 'banana', 'orange', 'grape']
    </script>
    
    <Button class=\\"deep_hidden_sm-block_text-blue-200\\">
      <ul>
        {#each fruits as fruit}
          <li>{fruit}</li>
        {/each}
      </ul>
    </Button>
    
    <Button class=\\"deep_text-yellow-500\\">
      Yellow One
    </Button>
    
    <Button>
      <div class=\\"decoy\\">
        Decoy
      </div>
    </Button>
    
    <style> :global(.deep_hidden_sm-block_text-blue-200) { @apply hidden sm:block text-blue-200; } :global(.deep_text-yellow-500) { @apply text-yellow-500; }
      .decoy {
        color: red;
      }
    </style>"
  `);
});

test('Preprocessor handles no style tag', async () => {
  const result = await preprocess(
    `<script>
    import Button from './Button.svelte';
  </script>
  <Button class="text-yellow-500">
  Yellow
</Button>`,
    [svelteDeepWind()]
  );
  expect(result.code).toMatchInlineSnapshot(`
    "<script>
        import Button from './Button.svelte';
      </script>
      <Button class=\\"deep_text-yellow-500\\">
      Yellow
    </Button><style> :global(.deep_text-yellow-500) { @apply text-yellow-500; }</style>"
  `);
});

test('Preprocessor handles no component classes', async () => {
  const result = await preprocess(
    `<div class="decoy">
  Decoy
</div>`,
    [svelteDeepWind()]
  );
  expect(result.code).toMatchInlineSnapshot(`
    "<div class=\\"decoy\\">
      Decoy
    </div>"
  `);
});

test('Preprocessor skips a file if not starting with script block', async () => {
  const result = await preprocess(
    `<!-- Comment --> 
    <script>
    import Button from './Button.svelte';
  </script>
  <Button class="text-yellow-500">
  Yellow
</Button>`,
    [svelteDeepWind()]
  );
  expect(result.code).toMatchInlineSnapshot(`
    "<!-- Comment --> 
        <script>
        import Button from './Button.svelte';
      </script>
      <Button class=\\"text-yellow-500\\">
      Yellow
    </Button>"
  `);
});

test('Preprocessor handles file with Typescript', async () => {
  const inputFile = fs.readFileSync('./input/HasTypescript.svelte', 'utf-8');
  const result = await preprocess(inputFile, [svelteDeepWind()]);
  fs.writeFileSync('./output/HasTypescript.svelte', result.code, 'utf-8');
});

test('Preprocessor handles file with Typescript and @apply classes in style block', async () => {
  const inputFile = fs.readFileSync('./input/__layout.svelte', 'utf-8');
  const result = await preprocess(inputFile, [svelteDeepWind()]);
  expect(result.code).toEqual(inputFile);
});