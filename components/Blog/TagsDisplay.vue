<template>
  <h2 class="mb-2 text-2xl font-bold">
    Tags
  </h2>
  <div class="mb-5 flex flex-row flex-wrap gap-1">
    <template v-if="tagItems">
      <div v-for="tags in tagItems.data" :key="tags.id">
        <NuxtLink :to="`/blog/tag/${tags.attributes.name}`"><UBadge
          variant="subtle"
          :ui="{ variant: { subtle: 'hover:bg-primary-500 hover:text-white dark:hover:bg-primary-800' } }"
          color="primary"
        >
          {{ tags.attributes.name }}
        </UBadge>
        </NuxtLink>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
interface tagsItem {
  id: string
  name: string
}
const nuxt = useNuxtApp()
const { find } = useStrapi()
const { data: tagItems } = useNuxtData('tags')
await useLazyAsyncData('tags', () => find<tagsItem>('categories', { fields: ['name'], sort: 'name:asc' }), {
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
})
</script>
