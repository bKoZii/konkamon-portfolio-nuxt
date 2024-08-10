import type { StrapiBlogSlug } from '~/types/StrapiBlogSlug'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { findOne } = useStrapi()

  try {
    const { data } = await findOne<StrapiBlogSlug>('blogs', to.params.slug as string, {
      fields: ['slug']
    })

    if (data?.attributes.slug !== to.params.slug) {
      return navigateTo('/blog/')
    }
  } catch (e) {
    return navigateTo('/blog/')
  }
})
