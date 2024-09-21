import MarkdownIt from 'markdown-it'
import { fromHighlighter } from '@shikijs/markdown-it/core'
import ShikiHighlight from '~/utils/ShikiHighlight'
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'
import 'markdown-it-github-alerts/styles/github-colors-light.css'
import 'markdown-it-github-alerts/styles/github-colors-dark-class.css'
import 'markdown-it-github-alerts/styles/github-base.css'

const md = MarkdownIt({ linkify: true, typographer: true, html: false })
md.use(fromHighlighter(await ShikiHighlight, { theme: 'aurora-x' }))
md.use(MarkdownItGitHubAlerts)

export const useMarkdownIt = (content: string) => {
  return md.render(content)
}