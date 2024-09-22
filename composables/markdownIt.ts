import MarkdownIt from 'markdown-it'
import { fromHighlighter } from '@shikijs/markdown-it/core'
import { getShikiHighlight } from '~/utils/ShikiHighlight'
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'
import 'markdown-it-github-alerts/styles/github-colors-light.css'
import 'markdown-it-github-alerts/styles/github-colors-dark-class.css'
import 'markdown-it-github-alerts/styles/github-base.css'

const { highlighter } = await getShikiHighlight()
const md = MarkdownIt({ linkify: true, typographer: true })
md.use(fromHighlighter(highlighter, { theme: 'aurora-x' }))
md.use(MarkdownItGitHubAlerts)

export const useMarkdownIt = async (content: string) => {
  return await md.render(content)
}
