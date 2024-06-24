<template>
  <div
    class="sticky container mx-auto max-w-[1000px] rounded-lg px-6 py-2 shadow-md z-10 bg-white bg-opacity-80 backdrop-blur-lg border dark:bg-neutral-900 dark:text-white dark:border-neutral-800"
  >
    <header class="flex items-center justify-between sm:justify-between xs:justify-center">
      <ULink id="myName" to="/" class="hidden sm:inline-flex items-center gap-2.5 text-xl font-extrabold" aria-label="logo"> KONKAMON </ULink>
      <nav class="gap-5 flex">
        <div v-for="data in navItems" :key="data.name" class="inline-flex">
          <UTooltip :text="data.name" :ui="{ popper: { strategy: 'absolute' } }">
            <ULink
              :to="data.link"
              active-class="text-primary"
              class="group relative inline-flex text-gray-400 transition duration-100 hover:text-gray-800 dark:hover:text-white"
            >
              <icon :name="data.icon" size="24px" mode="svg" class="active:scale-90" />
            </ULink>
          </UTooltip>
        </div>
        <UDivider orientation="vertical" />
        <NavbarThemeSwitch />
      </nav>
    </header>
  </div>
</template>

<script lang="ts" setup>
const navItems = [
  {
    name: 'Home',
    link: '/',
    icon: 'ph:house-duotone'
  },
  {
    name: 'Projects',
    link: '/Projects',
    icon: 'ph:folder-open-duotone'
  },
  {
    name: "What's In My Bag?",
    link: '/WhatIsInMyBag',
    icon: 'ph:backpack-duotone'
  },
  {
    name: 'Bookmarks',
    link: '/Bookmarks',
    icon: 'ph:bookmark-duotone'
  }
]
</script>
