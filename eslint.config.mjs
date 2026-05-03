import nextConfig from 'eslint-config-next/core-web-vitals';
import vitest from '@vitest/eslint-plugin';

export default [
  ...nextConfig,
  {
    settings: {
      react: { version: '19.2.5' },
    },
  },
  {
    files: ['**/*.test.{ts,tsx}'],
    plugins: { vitest },
    rules: vitest.configs.recommended.rules,
  },
];
