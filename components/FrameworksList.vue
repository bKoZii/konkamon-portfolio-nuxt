<template>
  <div>
    <h2 class="text-lg font-bold text-gray-600 mb-6">Framework / Library ที่เคยใช้งาน</h2>
    <div class="flex flex-row flex-wrap justify-center gap-2 text-gray-600 dark:text-white">
      <div v-for="list in frameworkList" class="inline-flex select-none">
        <div class="group relative inline-flex">
          <div v-if="typeof list.icon === 'string'">
            <Icon :name="list.icon" size="52px" mode="svg" />
          </div>
          <Label :msg="list.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type FrameworkListInterface from '~/types/FrameworkListInterface'

const frameworkList: FrameworkListInterface[] = [
  {
    name: 'Angular',
    icon: 'mdi:angular'
  },
  { name: 'VueJS', icon: 'mdi:vuejs' },
  { name: 'Ionic', icon: 'ion:logo-ionic' },
  { name: 'Quasar', icon: 'my-icon:quasar' },
  { name: 'Sass', icon: 'mdi:sass' },
  { name: 'TypeScript', icon: 'mdi:language-typescript' },
  { name: 'Python', icon: 'mdi:language-python' },
  { name: 'Firebase', icon: 'mdi:firebase' }
]
</script>

<style></style>
