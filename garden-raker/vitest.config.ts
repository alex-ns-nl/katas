import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,  // Enable global definitions for describe, it, expect, etc.
    environment: 'jsdom', // Set the environment to 'jsdom' for Svelte components
    include: ['src/**/*.test.ts'], // Specify which test files to include
    exclude: ['node_modules', '**/dist/**'], // Exclude node_modules and dist directories
  },
});
