import { parseMarkdown } from '@nuxtjs/mdc/runtime'

export default defineEventHandler(async (event) => {
  const cache = useStorage('markdown-cache')
  try {
    const body = await readBody(event) as { title: string, content: string }
    const { title, content } = body
    const cacheKey = title

    const cachedItem = await cache.getItem(cacheKey)
    if (cachedItem) {
      console.log('Using Cache :', cacheKey)
      return cachedItem
    }

    const ast = await parseMarkdown(content)
    console.log('Cache Not Found : ', cacheKey)

    await cache.setItem(cacheKey, ast.body)

    return ast.body
  } catch (error) {
    console.error('Error processing request:', error)
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' })
  }
})
