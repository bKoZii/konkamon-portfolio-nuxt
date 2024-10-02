import type { StrapiBlogSlug } from '~/types/StrapiBlogSlug'

export default defineNuxtRouteMiddleware(async (to) => {
  const { findOne } = useStrapi()
  const slug = to.params.slug as string
  const slugCacheStore = useMySlugCacheStore()

  const cachedSlug = slugCacheStore.getSlug(slug)

  if (cachedSlug) {
    if (cachedSlug !== slug) {
      return navigateTo('/blog/')
    }
    return true
  }

  try {
    const { data } = await findOne<StrapiBlogSlug>('blogs', slug, {
      fields: ['slug', 'publishedAt'],
    })

    if (!data?.attributes.slug || data.attributes.slug !== slug) {
      return navigateTo('/blog/')
    }

    if (data.attributes.publishedAt == null) {
      return createError({ statusCode: 404, message: 'Blog ที่คุณกำลังเข้าถึง ได้ยกเลิกการเผยแพร่แล้ว' })
    }

    slugCacheStore.setSlug(slug, data.attributes.slug)
    return true
  } catch {
    return createError({ statusCode: 404, message: 'ไม่พบ Blog ที่คุณกำลังเข้าถึง' })
  }
})
