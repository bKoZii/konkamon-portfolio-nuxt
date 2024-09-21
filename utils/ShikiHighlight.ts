import { createHighlighterCore } from 'shiki/core'

export default createHighlighterCore({
  themes: [import('shiki/themes/aurora-x.mjs')],
  langs: [
    import('shiki/langs/javascript.mjs'),
    import('shiki/langs/shell.mjs'),
    import('shiki/langs/typescript.mjs'),
    import('shiki/langs/vue.mjs'),
    import('shiki/langs/php.mjs')
  ],
  loadWasm: import('shiki/wasm')
})
