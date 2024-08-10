import { defineStore } from 'pinia'

export const useMySlugCacheStore = defineStore({
  id: 'mySlugCacheStore',
  state: () => ({
    cache: {} as Record<string, string>,
  }),
  actions: {
    getSlug(slug: string) {
      return this.cache[slug]
    },
    setSlug(slug: string, value: string) {
      this.cache[slug] = value
    },
  },
})
// import { defineStore } from 'pinia'

// export const useMySlugCacheStore = defineStore('slugCache', {
//   state: () => ({
//     cache: {} as Record<string, string>
//   }),
//   actions: {
//     getSlug(slug: string) {
//       return this.cache[slug]
//     },
//     setSlug(slug: string, value: string) {
//       this.cache[slug] = value
//     }
//   },
//   persist: {
//     enabled: true,
//     strategies: [
//       {
//         key: 'slugCache',
//         storage: sessionStorage
//       }
//     ]
//   }
// })