<template>
  <div>
    <UTabs
      :items="items"
      :ui="{
        list: {
          background: 'bg-neutral-100',
          base: 'border dark:border-none border-neutral-300 drop-shadow-sm h-fit',
          tab: {
            active: 'bg-primary-500 border dark:border-none text-white dark:bg-gray-900 dark:text-primary-400',
            inactive: 'text-gray-900 hover:text-primary-500 dark:hover:text-primary-400',
          },
        },
      }"
    >
      <template #item="{ item }: { item: Item }">
        <UCard :ui="{ base: 'overflow-hidden' }">
          <template #header>
            <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              {{ item.label }}
            </p>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {{ item.description }}
            </p>
          </template>
          <section>
            <Motion preset="slideBottom" as="section">
              <div v-if="item.key == 'techStacks'">
                <LazyTechnology />
              </div>
              <div v-else-if="item.key == 'socialLinks'">
                <LazySocialLinks />
              </div>
              <div v-else-if="item.key == 'featuredWork'">
                <LazyFeaturedWork />
              </div>
            </Motion>
          </section>
        </UCard>
      </template>
    </UTabs>
  </div>
</template>

<script lang="ts" setup>
interface Item {
  key: string
  label: string
  description: string
  icon?: string
}
const items: Item[] = [
  {
    key: 'techStacks',
    label: 'Tech Stacks',
    icon: 'ph:code-duotone',
    description: 'รวม Tech Stack ที่ผมใช้งาน',
  },
  {
    key: 'socialLinks',
    label: 'Social Links',
    icon: 'ph:link-duotone',
    description: 'Social Media ของกระผม',
  },
  {
    key: 'featuredWork',
    label: 'Featured Work',
    icon: 'ph:briefcase-duotone',
    description: 'รวมโปรเจค / ชิ้นงาน ต่างๆ ผมเป็นคนที่ชอบทำงาน / โปรเจคอะไรเล็กๆ น้อยๆ',
  },
]
</script>
