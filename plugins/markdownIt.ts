import MarkdownIt from 'markdown-it'
import { fromHighlighter } from '@shikijs/markdown-it/core'
import ShikiHighlight from '~/utils/ShikiHighlight'
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'
import 'markdown-it-github-alerts/styles/github-colors-light.css'
import 'markdown-it-github-alerts/styles/github-colors-dark-class.css'
import 'markdown-it-github-alerts/styles/github-base.css'
export default defineNuxtPlugin(async () => {
  const md = MarkdownIt({ linkify: true, typographer: true })
  md.use(fromHighlighter(await ShikiHighlight, { theme: 'aurora-x' }))
  md.use(MarkdownItGitHubAlerts)
  return {
    provide: {
      markdownIt: md
    }
  }
})
