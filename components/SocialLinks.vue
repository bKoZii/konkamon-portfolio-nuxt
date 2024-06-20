<template>
  <div>
    <div>
      <h2 class="text-lg font-bold text-gray-600 mb-6">Social Links</h2>
    </div>
    <div class="flex flex-col space-y-3 text-black dark:text-white gap-2">
      <div v-for="data in socialList" :key="data.name">
        <div class="flex items-center justify-between space-x-2">
          <div v-if="data.link">
            <a :href="data.link" target="_blank" ref="noopener noreferrer" class="flex-shrink-0 text-lg hover:text-primary"
              >{{ data.name }}
              <Icon class="flex-shrink-0" name="mdi:launch" />
            </a>
          </div>
          <span class="border-b border-dashed border-gray-300 dark:border-neutral-700 flex-grow"></span>
          <span class="flex-shrink-0 text-gray-600 dark:text-white">
            <Icon :name="data.icon" size="28px" mode="svg" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ItemWithIcon } from '../types/ItemInterface'
const socialList: ItemWithIcon[] = [
  {
    name: 'Instagram',
    icon: 'ph:instagram-logo-fill',
    link: 'https://www.instagram.com/bkoziii/'
  },
  {
    name: 'GitHub',
    icon: 'ph:github-logo-fill',
    link: 'https://github.com/bKoZii'
  }
]
</script>

<style></style>
