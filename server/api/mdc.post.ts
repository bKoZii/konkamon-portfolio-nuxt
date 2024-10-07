import { parseMarkdown } from '@nuxtjs/mdc/runtime'
import { useStorage } from '@vueuse/core'
import type { MDCRoot } from '@nuxtjs/mdc'

const cache = useStorage<Record<string, MDCRoot>>('mdc-cache', {})

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const cacheKey = body.title

    if (cache.value[cacheKey]) {
      return cache.value[cacheKey]
    }

    const ast = await parseMarkdown(body.content)

    cache.value[cacheKey] = ast.body

    return ast.body
  } catch (error) {
    console.error('Error processing request:', error)
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' })
  }
})
