import { parseMarkdown } from '@nuxtjs/mdc/runtime'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const ast = await parseMarkdown(body.content)
  return ast.body
})
