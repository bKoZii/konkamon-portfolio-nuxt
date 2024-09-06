<template>
  <div>
    <div>
      <h2 class="mb-6 text-lg font-bold text-gray-500 dark:text-gray-400">Social Links</h2>
    </div>
    <div class="flex flex-col gap-4 text-black sm:gap-3 dark:text-white">
      <div v-for="data in socialList" :key="data.name">
        <div class="flex items-center justify-between space-x-2">
          <div v-if="data.link">
            <a :href="data.link" target="_blank" ref="noopener noreferrer" class="hover:text-primary flex flex-shrink-0 gap-2 text-base sm:text-lg"
              >{{ data.name }}
              <Icon class="flex-shrink-0" name="ic:baseline-launch" />
            </a>
          </div>
          <span class="flex-grow border-b border-dashed border-gray-300 dark:border-neutral-700"></span>
          <span class="flex-shrink-0 text-gray-800 dark:text-white">
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