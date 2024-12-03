<template>
  <h2 class="mb-2 text-2xl font-bold">Tags</h2>
  <div class="mb-5 flex flex-row flex-wrap gap-1">
    <template v-if="tagItems">
      <div v-for="tags in tagItems.data" :key="tags.documentId">
        <NuxtLink :to="`/blog/tag/${tags.name}`"
          ><UBadge
            variant="subtle"
            :ui="{
              variant: {
                subtle: 'hover:bg-primary-500 dark:hover:bg-primary-800 hover:text-white',
              },
            }"
            color="primary">
            {{ tags.name }}
          </UBadge>
        </NuxtLink>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { Strapi5ResponseMany } from '@nuxtjs/strapi'

interface tagsItem {
  documentId: string
  name: string
}
const nuxt = useNuxtApp()
const { find } = useStrapi()
const { data: tagItems } = useNuxtData<Strapi5ResponseMany<tagsItem>>('tags')
await useAsyncData(
  'tags',
  () => find<tagsItem>('categories', { fields: ['name'], sort: 'name:asc' }),
  {
    default() {
      return tagItems.value
    },
    getCachedData: (key) => {
      if (nuxt.isHydrating && nuxt.payload.data[key]) {
        return nuxt.payload.data[key]
      }
      if (nuxt.static.data[key]) {
        return nuxt.static.data[key]
      }
      return null
    },
    deep: false,
    lazy: true,
  },
)
</script>
