import crypto from 'crypto'
import { parseMarkdown } from '@nuxtjs/mdc/runtime'
import { LRUCache } from 'lru-cache'
import type { MDCRoot } from '@nuxtjs/mdc'

function hashContent(content: string): string {
  return crypto.createHash('sha256').update(content).digest('hex')
}

const cache = new LRUCache<string, MDCRoot>({
  max: 100,
  ttl: 1000 * 60 * 60 * 24 * 7, // 1 week
})

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const cacheKey = hashContent(body.content)

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)
    }

    const ast = await parseMarkdown(body.content)

    cache.set(cacheKey, ast.body)

    return ast.body
  } catch (error) {
    console.error('Error processing request:', error)
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' })
  }
})
