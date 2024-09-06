import type { StrapiBlogSlug } from '~/types/StrapiBlogSlug'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { findOne } = useStrapi()
  const slug = to.params.slug as string
  const slugCacheStore = useMySlugCacheStore()

  const cachedSlug = slugCacheStore.getSlug(slug)


  try {
    const { data } = await findOne<StrapiBlogSlug>('blogs', slug, {
      fields: ['slug', 'publishedAt']
    })

    if (data?.attributes.slug) {
      if (data.attributes.publishedAt == null) {
        return navigateTo({ path: '/blog/', query: { unpublished: 'true', link: from.params['slug'] }, replace: true })
      }
      slugCacheStore.setSlug(slug, data.attributes.slug)
    }

    if (!data?.attributes.slug || data.attributes.slug !== slug) {
      return navigateTo('/blog/')
    }
  } catch (error) {
    return navigateTo({ path: '/blog/', query: { notfound: 'true', link: from.params['slug'] }, replace: true })
  }

  if (cachedSlug) {
    if (cachedSlug !== slug) {
      return navigateTo('/blog/')
    }
    // return
  }

})
