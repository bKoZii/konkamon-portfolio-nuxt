<template>
  <div>
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
    icon: 'simple-icons:typescript',
  },
  {
    name: 'JavaScript',
    icon: 'simple-icons:javascript',
  },
  {
    name: 'Python',
    icon: 'simple-icons:python',
  },
  {
    name: 'HTML',
    icon: 'simple-icons:html5',
  },
  {
    name: 'CSS',
    icon: 'simple-icons:css3',
  },
]

const frameworkList: FrameworkListInterface[] = [
  {
    name: 'VueJS',
    icon: 'simple-icons:vuedotjs',
  },
  {
    name: 'Angular',
    icon: 'simple-icons:angular',
  },
  {
    name: 'Nuxt',
    icon: 'simple-icons:nuxtdotjs',
  },
  {
    name: 'Quasar',
    icon: 'simple-icons:quasar',
  },
  {
    name: 'Ionic',
    icon: 'simple-icons:ionic',
  },
]

const softwareList: FrameworkListInterface[] = [
  {
    name: 'Visual Studio Code',
    icon: 'simple-icons:visualstudiocode',
  },
  {
    name: 'GitHub',
    icon: 'simple-icons:github',
  },
  {
    name: 'Firebase',
    icon: 'simple-icons:firebase',
  },
]
</script>
