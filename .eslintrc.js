module.exports = {
  env: {
    jest: true,
  },
  extends: [
    '@cylution/nodejs',
  ],
  overrides: [
    // typescript
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended'
      ],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'none',
            requireLast: false
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false
          },
          // overrides: {
          //   interface: {
          //     multiline: {
          //       delimiter: 'none',
          //       requireLast: false
          //     }
          //   }
          // }
        }],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/type-annotation-spacing': ['warn', {
          before: false,
          after: true
        }],
      },
    },
  ],
}
