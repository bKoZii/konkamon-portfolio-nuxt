<template>
  <div
    class="sticky top-0 z-10 mx-0 max-w-[1300px] border-b bg-white px-3 py-1 shadow-md md:top-1 md:mx-2 md:rounded-lg md:border md:px-4 lg:mx-auto dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-white dark:backdrop-blur-lg">
    <header class="xs:justify-between flex items-center justify-between sm:justify-between">
      <ULink
        id="myName"
        to="/"
        class="inline-flex items-center gap-2 text-xl font-extrabold"
        aria-label="logo">
        <UIcon name="my-icon:konkamon-logo" mode="svg" size="20" />
        <UIcon name="my-icon:konkamon" mode="svg" size="22" />
      </ULink>
      <nav class="flex gap-4">
        <div v-for="data in navItems" :key="data.label" class="hidden self-center md:inline-flex">
          <UTooltip :text="data.label" :ui="{ popper: { strategy: 'absolute' } }">
            <ULink
              :to="data.to"
              inactive-class="text-neutral-700 hover:text-black dark:text-white dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-900"
              active-class="text-primary-500 dark:text-primary dark:hover:text-primary hover:text-primary bg-primary-100/50 dark:bg-neutral-700"
              class="inline-flex rounded-lg p-1"
              :aria-label="`Go to ${data.label} Page.`">
              <icon :name="data.icon" size="24px" mode="svg" class="active:scale-90" />
            </ULink>
          </UTooltip>
        </div>
        <UDivider orientation="vertical" class="hidden md:block" />
        <section class="flex items-center gap-4">
          <NavbarThemeSwitch />
          <NavbarLangSwitch />
        </section>
        <UButton
          class="inline-flex md:hidden"
          aria-label="Open"
          icon="ph:list"
          variant="ghost"
          color="black"
          @click="isSidebarOpen = true" />
        <LazyUSlideover v-model="isSidebarOpen">
          <div class="flex flex-1 flex-col gap-3 p-4">
            <div class="flex flex-row items-center justify-between">
              <ULink
                id="myName"
                to="/"
                class="inline-flex items-center gap-1 text-2xl font-extrabold"
                aria-label="logo">
                <UIcon name="my-icon:konkamon-logo" mode="svg" size="24" />
                <UIcon name="my-icon:konkamon" mode="svg" size="26" />
              </ULink>
              <UButton
                color="white"
                variant="solid"
                size="sm"
                icon="ic:baseline-close"
                class="z-10 flex sm:hidden"
                square
                padded
                @click="isSidebarOpen = false" />
            </div>
            <UDivider />
            <LazyUVerticalNavigation
              :links="navItems"
              :ui="{
                wrapper: 'space-y-2 border-s-2 border-gray-200 dark:border-gray-800',
                base: 'group -ms-px flex border-s-2 leading-6 before:hidden',
                padding: 'p-0 py-1 ps-4',
                rounded: '',
                ring: '',
                icon: { active: 'text-primary-500 dark:text-primary-400', base: 'size-8' },
                active:
                  'text-primary-500 dark:text-primary-400 bg-primary-100/50 border-current font-semibold dark:bg-neutral-800',
                inactive:
                  'border-transparent text-gray-700 hover:border-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:border-gray-500 dark:hover:text-gray-300',
              }"
              @click="isSidebarOpen = false" />
          </div>
        </LazyUSlideover>
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
    icon: 'ph:house-duotone',
  },
  {
    label: 'Projects',
    to: '/Projects',
    icon: 'ph:folder-open-duotone',
  },
  {
    label: "What's In My Bag?",
    to: '/WhatIsInMyBag',
    icon: 'ph:backpack-duotone',
  },
  {
    label: 'Bookmarks',
    to: '/Bookmarks',
    icon: 'ph:bookmark-duotone',
  },
  {
    label: 'Blog',
    to: '/blog',
    icon: 'ph:book-duotone',
  },
]
</script>
