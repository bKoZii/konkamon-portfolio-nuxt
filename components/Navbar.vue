<template>
  <div
    class="sticky container mx-auto max-w-[1000px] rounded-lg px-6 py-2 shadow-md z-10 bg-white bg-opacity-80 backdrop-blur-lg border dark:bg-neutral-900 dark:text-white dark:border-neutral-800"
  >
    <header class="flex items-center justify-between">
      <ULink id="myName" to="/" class="inline-flex items-center gap-2.5 text-xl font-extrabold" aria-label="logo"> KONKAMON </ULink>
      <nav class="hidden gap-5 lg:flex">
        <div v-for="data in navItems" :key="data.name" class="inline-flex">
          <UTooltip :text="data.name" :ui="{ popper: { strategy: 'absolute' } }">
            <ULink
              :to="data.link"
              active-class="text-primary"
              class="group relative inline-flex text-gray-400 transition duration-100 hover:text-gray-800 dark:hover:text-white"
            >
              <Icon :name="data.icon" size="24px" mode="svg" class="active:scale-90" />
            </ULink>
          </UTooltip>
        </div>
        <UDivider orientation="vertical" />
        <NavbarThemeSwitch />
      </nav>
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        Menu
      </button>
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
