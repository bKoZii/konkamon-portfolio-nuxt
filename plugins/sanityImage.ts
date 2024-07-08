import imageUrlBuilder from '@sanity/image-url'
export default defineNuxtPlugin((nuxtApp) => {
  const sanityConfig = useSanity().config
  const dataset = sanityConfig.dataset || ''
  const builder = imageUrlBuilder({ ...sanityConfig, dataset })
  function urlFor(source: string) {
    return markRaw(builder.image(source).auto('format'))
  }
  return {
    provide: { urlFor }
  }
})
