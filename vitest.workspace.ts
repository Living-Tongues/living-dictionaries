import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  'packages/site/vitest.config.ts',
  'packages/types/vitest.config.ts',
  'packages/scripts/vitest.config.ts',
  'packages/ids-import/vitest.config.ts',
])
