import { defineStore } from 'pinia'

export const useMySlugCacheStore = defineStore({
  id: 'konkamonBlogSlug',
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
  persist: {
    storage: persistedState.localStorage,
  },
})
