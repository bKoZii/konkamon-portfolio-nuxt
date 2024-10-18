import type { MDCParserResult as OriginalMDCParserResult } from '@nuxtjs/mdc'
import { parseMarkdown } from '@nuxtjs/mdc/runtime'
import type { StrapiBlogSlug } from '~/types/StrapiBlogSlug'

interface MDCParserResult extends OriginalMDCParserResult {
  updatedAt: string
}

interface CachedMDC extends MDCParserResult {
  ast: OriginalMDCParserResult
}

export default defineEventHandler(async (event) => {
  const cache = useStorage('markdown-cache')
  try {
    const body = await readBody<StrapiBlogSlug>(event)
    const { slug, content, updatedAt } = body
    const cacheKey = slug

    const cachedItem = await cache.getItem<CachedMDC>(cacheKey)
    if (cachedItem && new Date(cachedItem.updatedAt) >= new Date(updatedAt)) {
      console.log('Using Cache :', cacheKey)
      return cachedItem.ast
    }

    const ast = await parseMarkdown(content)
    console.log('Cache Not Found or Outdated : ', cacheKey)

    await cache.setItem(cacheKey, { ast, updatedAt })

    return ast
  } catch (error) {
    console.error('Error processing request:', error)
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' })
  }
})
