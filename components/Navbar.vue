<template>
  <div
    class="sticky top-0 z-10 border-b bg-white/80 px-6 py-2 shadow-md backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-900/85 dark:text-white"
  >
    <header class="flex items-center justify-between xs:justify-center sm:justify-between">
      <ULink id="myName" to="/" class="hidden items-center gap-2.5 text-xl font-extrabold sm:inline-flex" aria-label="logo"> KONKAMON </ULink>
      <nav class="flex gap-5">
        <div v-for="data in navItems" :key="data.name" class="inline-flex">
          <UTooltip :text="data.name" :ui="{ popper: { strategy: 'absolute' } }">
            <ULink
              :to="data.link"
              active-class="text-primary dark:text-primary dark:hover:text-primary hover:text-primary"
              class="inline-flex text-gray-600 transition duration-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
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
