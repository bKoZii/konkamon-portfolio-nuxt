<template>
  <div
    class="sticky top-0 z-10 border-b bg-white/80 px-6 py-2 shadow-md backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-950/80 dark:text-white"
  >
    <header class="flex items-center justify-between xs:justify-between sm:justify-between">
      <ULink id="myName" to="/" class="inline-flex items-center gap-2.5 text-xl font-extrabold" aria-label="logo"> KONKAMON </ULink>
      <nav class="flex gap-5">
        <div v-for="data in navItems" :key="data.label" class="hidden self-center md:inline-flex">
          <UTooltip :text="data.label" :ui="{ popper: { strategy: 'absolute' } }">
            <ULink
              :to="data.to"
              active-class="text-primary dark:text-primary dark:hover:text-primary hover:text-primary"
              class="inline-flex text-gray-600 transition duration-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
              :aria-label="`Go to ${data.label} Page.`"
            >
              <icon :name="data.icon" size="24px" mode="svg" class="active:scale-90" />
            </ULink>
          </UTooltip>
        </div>
        <UDivider orientation="vertical" class="hidden md:block" />
        <NavbarThemeSwitch />
        <UButton class="inline-flex md:hidden" aria-label="Open" icon="ph:list" variant="ghost" color="black" @click="isSidebarOpen = true" />
        <USlideover v-model="isSidebarOpen">
          <div class="flex flex-1 flex-col gap-3 p-4">
            <UButton
              color="white"
              variant="solid"
              size="sm"
              icon="ic:baseline-close"
              class="absolute end-5 top-5 z-10 flex sm:hidden"
              square
              padded
              @click="isSidebarOpen = false"
            />
            <ULink id="myName" to="/" class="text-2xl font-extrabold" aria-label="logo"> KONKAMON </ULink>
            <UDivider />
            <UVerticalNavigation :links="navItems" :ui="{ active: 'text-primary dark:text-primary', icon: { active: 'text-primary dark:text-primary' } }" @click="isSidebarOpen = false" />
          </div>
        </USlideover>
      </nav>
    </header>
  </div>
</template>

<script lang="ts" setup>
const isSidebarOpen = ref(false)
const navItems = [
  {
    label: 'Home',
    to: '/',
    icon: 'ph:house-duotone'
  },
  {
    label: 'Projects',
    to: '/Projects',
    icon: 'ph:folder-open-duotone'
  },
  {
    label: "What's In My Bag?",
    to: '/WhatIsInMyBag',
    icon: 'ph:backpack-duotone'
  },
  {
    label: 'Bookmarks',
    to: '/Bookmarks',
    icon: 'ph:bookmark-duotone'
  },
  {
    label: 'Resume',
    to: '/Resume',
    icon: 'ph:read-cv-logo-duotone'
  },
  {
    label: 'Blog',
    to: '/blog',
    icon: 'ph:notebook-duotone'
  },
  {
    label: 'Nuxt MDC',
    to: '/nuxt-mdc',
    icon: 'ph:markdown-logo-duotone'
  }
]
</script>
