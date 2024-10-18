import type { MDCParserResult } from '@nuxtjs/mdc'
import { parseMarkdown } from '@nuxtjs/mdc/runtime'

interface RequestBody {
  slug: string
  content: string
}

interface CachedItem {
  slug: string
  content: string
  ast: MDCParserResult
}

export default defineEventHandler(async (event) => {
  const cache = useStorage('markdown-cache')

  const getRequestBody = async (): Promise<RequestBody> => {
    try {
      return await readBody<RequestBody>(event)
    } catch (error) {
      console.error('Error reading request body:', error)
      throw createError({ statusCode: 400, statusMessage: 'Bad Request' })
    }
  }

  const getCachedItem = async (cacheKey: string): Promise<CachedItem | null> => {
    try {
      return await cache.getItem<CachedItem>(cacheKey)
    } catch (error) {
      console.error('Error getting cached item:', error)
      return null
    }
  }

  const setCachedItem = async (cacheKey: string, item: CachedItem): Promise<void> => {
    try {
      await cache.setItem(cacheKey, item)
    } catch (error) {
      console.error('Error setting cached item:', error)
    }
  }

  try {
    const { slug, content } = await getRequestBody()
    const cacheKey = slug

    const cachedItem = await getCachedItem(cacheKey)
    if (cachedItem) {
      if (cachedItem.content === content) {
        console.log('Using Cache:', cacheKey)
        return cachedItem.ast.body
      } else {
        console.log('Content Changed:', cacheKey)
      }
    } else {
      console.log('Cache Not Found:', cacheKey)
    }

    const ast = await parseMarkdown(content)
    await setCachedItem(cacheKey, { slug, content, ast })

    return ast.body
  } catch (error) {
    console.error('Error processing request:', error)
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' })
  }
})
