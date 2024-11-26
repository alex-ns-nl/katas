#!/bin/bash

# Exit on any error
set -e

# Check if the project directory was provided
if [ -z "$1" ]; then
  echo "Please provide a project directory."
  exit 1
fi

PROJECT_DIR=$1

# Step 1: Create a new SvelteKit project
echo "Setting up a new SvelteKit project in $PROJECT_DIR..."
npx degit sveltejs/template $PROJECT_DIR

cd $PROJECT_DIR

# Install project dependencies
npm install

# Add TypeScript to the project
node scripts/setupTypeScript.js

# Install Vitest
npm i -D vitest

# Create vitest.config.ts file in the project root
cat <<EOL > vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,  // Enable global definitions for describe, it, expect, etc.
    environment: 'jsdom', // Set the environment to 'jsdom' for Svelte components
    include: ['src/**/*.test.ts'], // Specify which test files to include
    exclude: ['node_modules', '**/dist/**'], // Exclude node_modules and dist directories
  },
});
EOL

# Update package.json to use Vitest for testing
sed -i '' 's/"scripts": {/"scripts": { "test": "vitest",/' package.json

# Ensure the lib directory exists
mkdir -p src/lib

# Navigate into the lib directory
cd src/lib

# Create playground.ts and playground.test.ts files

# Write content to playground.ts
cat <<EOL > playground.ts
export const exampleFunction = (value) => {
  return value;
};
EOL

# Write content to playground.test.ts
cat <<EOL > playground.test.ts
import { it, expect } from 'vitest';
import { exampleFunction } from './playground';

describe('solutions', () => {
  it('tests my first function', () => {
    const input = 0;
    expect(exampleFunction(input)).toBe(0);
  });
})
EOL

echo "Setup complete. To get started, navigate into the svelte-project directory and use npm run dev."