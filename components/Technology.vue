<template>
  <div>
    <h2 class="mb-3 text-lg font-bold text-gray-500">Technology</h2>
    <div class="grid grid-cols-1 gap-5 text-gray-800 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
      <TechnologyGridItems title="Languages" :technology-data="languageList" />
      <TechnologyGridItems title="Frameworks" :technology-data="frameworkList" />
      <TechnologyGridItems title="Softwares / Services" :technology-data="softwareList" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type FrameworkListInterface from '~/types/FrameworkListInterface'

const languageList: FrameworkListInterface[] = [
  {
    name: 'TypeScript',
    icon: 'mdi:language-typescript'
  },
  {
    name: 'JavaScript',
    icon: 'mdi:language-javascript'
  },
  {
    name: 'Python',
    icon: 'mdi:language-python'
  },
  {
    name: 'HTML',
    icon: 'mdi:language-html5'
  },
  {
    name: 'CSS',
    icon: 'mdi:language-css3'
  }
]

const frameworkList: FrameworkListInterface[] = [
  {
    name: 'VueJS',
    icon: 'mdi:vuejs'
  },
  {
    name: 'Angular',
    icon: 'mdi:angular'
  },
  {
    name: 'Nuxt',
    icon: 'mdi:nuxt'
  },
  {
    name: 'Quasar',
    icon: 'simple-icons:quasar'
  },
  {
    name: 'Ionic',
    icon: 'ion:logo-ionic'
  }
]

const softwareList: FrameworkListInterface[] = [
  {
    name: 'Visual Studio Code',
    icon: 'mdi:microsoft-visual-studio-code'
  },
  {
    name: 'GitHub',
    icon: 'mdi:github'
  },
  {
    name: 'Firebase',
    icon: 'mdi:firebase'
  }
]
</script>
