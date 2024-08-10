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
    return
  }

  try {
    const { data } = await findOne<StrapiBlogSlug>('blogs', slug, {
      fields: ['slug']
    })

    if (data?.attributes.slug) {
      slugCacheStore.setSlug(slug, data.attributes.slug)
    }

    if (!data?.attributes.slug || data.attributes.slug !== slug) {
      return navigateTo('/blog/')
    }
  } catch (error) {
    return navigateTo('/blog/')
  }
})
