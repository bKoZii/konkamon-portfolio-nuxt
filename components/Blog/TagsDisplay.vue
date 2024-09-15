<template>
  <h2 class="mb-2 text-2xl font-bold">Tags</h2>
  <div class="mb-5 flex flex-row flex-wrap gap-1">
    <template v-if="tagItems">
      <div v-for="tags in tagItems.data" :key="tags.id">
        <NuxtLink :to="`/blog/tag/${tags.attributes.name}`"
          ><UBadge variant="subtle" :ui="{ variant: { subtle: 'hover:bg-neutral-950' } }" color="primary">{{ tags.attributes.name }}</UBadge>
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
const { find } = useStrapi()
const { data: tagItems } = await useLazyAsyncData('tags', () => find<tagsItem>('categories', { fields: ['name'], sort: 'name:asc' }))
</script>
