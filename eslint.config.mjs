import nextConfig from 'eslint-config-next/core-web-vitals';
import vitest from '@vitest/eslint-plugin';

export default [
  ...nextConfig,
  {
    settings: {
      react: { version: '19.3.1' },
    },
  },
  {
    files: ['**/*.test.{ts,tsx}'],
    plugins: { vitest },
    rules: vitest.configs.recommended.rules,
  },
];
