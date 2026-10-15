import { defineConfig } from 'vitest/config';

export default defineConfig({
  // tsconfig.json keeps "jsx": "preserve" for Modern.js, so Vitest needs the
  // React 17+ automatic runtime set explicitly.
  oxc: {
    jsx: { runtime: 'automatic' },
  },
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
  },
});
