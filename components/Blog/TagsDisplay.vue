<template>
  <h2 class="mb-2 text-2xl font-bold">Tags:</h2>
  <div class="mb-5 flex flex-row flex-wrap gap-1">
    <template v-if="tagItems">
      <BlogTagsToggler :tags="tagItems.data" @toggled-tags="$emit('toggledTags', $event)" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { Strapi5ResponseMany } from '@nuxtjs/strapi'
import type { tagsItem } from '~/types/BlogTags'

defineEmits(['toggledTags'])

const { find } = useStrapi()
const { data: tagItems } = useNuxtData<Strapi5ResponseMany<tagsItem>>('tags')
await useAsyncData(
  'tags',
  () => find<tagsItem>('categories', { fields: ['name'], sort: 'name:asc' }),
  {
    default() {
      return tagItems.value
    },
    deep: false,
    lazy: true,
  },
)
</script>
