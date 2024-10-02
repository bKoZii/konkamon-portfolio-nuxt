import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.ts', '**/*.vue', 'eslint.config.mjs'],
    rules: {
      'no-console': 'off',
      'vue/max-attributes-per-line': ['warn', { singleline: 2, multiline: 1 }],
    },
  },
)
