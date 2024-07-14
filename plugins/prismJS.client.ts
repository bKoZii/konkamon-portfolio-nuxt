import Prism from 'prismjs'
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-shell-session';
import 'prismjs/components/prism-bash';
import 'prismjs/themes/prism-tomorrow.css'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      Prism
    }
  }
});
