import MarkdownIt from 'markdown-it'
import { fromHighlighter } from '@shikijs/markdown-it/core'
import { getShikiHighlight } from '~/utils/ShikiHighlight'
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'
import 'markdown-it-github-alerts/styles/github-colors-light.css'
import 'markdown-it-github-alerts/styles/github-colors-dark-class.css'
import 'markdown-it-github-alerts/styles/github-base.css'

let md: MarkdownIt

async function setupMarkdownIt() {
  const { highlighter } = await getShikiHighlight()
  md = MarkdownIt({ linkify: true, typographer: true })
  md.use(fromHighlighter(highlighter, { theme: 'aurora-x' }))
  md.use(MarkdownItGitHubAlerts)
}

setupMarkdownIt()

export const useMarkdownIt = async (content: string) => {
  return md.render(content)
}
