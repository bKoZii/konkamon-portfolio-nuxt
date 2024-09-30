import type { StrapiBlogSlug } from '~/types/StrapiBlogSlug'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { findOne } = useStrapi()
  const slug = to.params.slug as string
  const slugCacheStore = useMySlugCacheStore()

  const cachedSlug = slugCacheStore.getSlug(slug)

  try {
    if (cachedSlug) {
      if (cachedSlug !== slug) {
        return navigateTo('/blog/')
      }
      return true
    }
    const { data } = await findOne<StrapiBlogSlug>('blogs', slug, {
      fields: ['slug', 'publishedAt']
    })

    if (data?.attributes.slug) {
      if (data.attributes.publishedAt == null) {
        return createError({ statusCode: 404, message: 'Blog ที่คุณกำลังเข้าถึง ได้ยกเลิกการเผยแพร่แล้ว' })
      }
      slugCacheStore.setSlug(slug, data.attributes.slug)
    }

    if (!data?.attributes.slug || data.attributes.slug !== slug) {
      return navigateTo('/blog/')
    }
  } catch (error) {
    return createError({ statusCode: 404, message: 'ไม่พบ Blog ที่คุณกำลังเข้าถึง' })
  }
})
