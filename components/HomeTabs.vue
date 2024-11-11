<template>
  <div>
    <UTabs
      :items="items"
      :ui="{
        list: {
          background: 'bg-neutral-100',
          base: 'border dark:border-none border-neutral-300 drop-shadow-sm h-fit',
          marker: { background: 'bg-primary-500' },
          tab: {
            active: 'bg-primary-500 text-white dark:bg-gray-900 dark:text-primary-400',
            inactive: 'text-gray-900 hover:text-primary-500 dark:hover:text-primary-400',
          },
        },
      }"
    >
      <template #item="{ item }: { item: Item }">
        <UCard :ui="{ base: 'overflow-hidden' }">
          <template #header>
            <h2 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
              {{ item.label }}
            </h2>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {{ item.description }}
            </p>
          </template>
          <section>
            <div v-if="item.key == 'techStacks'">
              <LazyTechnology />
            </div>
            <div v-else-if="item.key == 'socialLinks'">
              <LazySocialLinks />
            </div>
            <div v-else-if="item.key == 'featuredWork'">
              <LazyFeaturedWork />
            </div>
          </section>
        </UCard>
      </template>
    </UTabs>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()

interface Item {
  key: string
  label: string
  description: string
  icon?: string
}
const items = computed<Item[]>(() => [
  {
    key: 'techStacks',
    label: 'Tech Stacks',
    icon: 'ph:code-duotone',
    description: t('home.techStacks.subtitle'),
  },
  {
    key: 'socialLinks',
    label: 'Social Links',
    icon: 'ph:link-duotone',
    description: t('home.socialLinks.subtitle'),
  },
  {
    key: 'featuredWork',
    label: 'Featured Work',
    icon: 'ph:briefcase-duotone',
    description: t('home.featuredWork.subtitle'),
  },
])
</script>
