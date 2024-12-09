<template>
  <div>
    <ToggleGroupRoot
      v-model="toggledTags"
      type="multiple"
      class="flex gap-1 rounded-lg shadow-sm"
      @update:model-value="$emit('toggledTags', toggledTags)">
      <div v-for="tags in $props.tags" :key="tags.documentId">
        <ToggleGroupItem :value="tags.name" :as-child="true">
          <UBadge
            variant="subtle"
            :ui="{
              base: 'dark:data-[state=on]:bg-primary-600 cursor-pointer data-[state=on]:bg-stone-100 dark:data-[state=on]:text-white',
              variant: {
                subtle: 'hover:bg-primary-500 dark:hover:bg-primary-800 hover:text-white',
              },
            }"
            color="primary">
            {{ tags.name }}
          </UBadge>
        </ToggleGroupItem>
      </div>
    </ToggleGroupRoot>
  </div>
</template>

<script lang="ts" setup>
import type { Strapi5ResponseMany } from '@nuxtjs/strapi'
import { ToggleGroupItem, ToggleGroupRoot } from 'reka-ui'
import type { tagsItem } from '~/types/BlogTags'

defineProps<{
  tags: tagsItem[]
}>()

const emit = defineEmits(['toggledTags'])
const toggledTags = ref([])
const { find } = useStrapi()
const { data: tagItems } = useNuxtData<Strapi5ResponseMany<tagsItem>>('tags')
await useLazyAsyncData(
  'tags',
  () => find<tagsItem>('categories', { fields: ['name'], sort: 'name:asc' }),
  {
    deep: false,
    default() {
      return tagItems.value
    },
  },
)
</script>
