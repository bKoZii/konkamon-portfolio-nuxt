import prettierConfig from '@vue/eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginVue from 'eslint-plugin-vue'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  pluginVue.configs['flat/recommended'],
  prettierConfig,
  eslintPluginPrettierRecommended,
)
