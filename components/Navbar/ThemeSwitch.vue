<template>
  <div>
    <!-- <button class="inline-flex text-gray-400 group relative hover:text-gray-900 dark:hover:text-gray-100" @click="isDark = !isDark">
      <UTooltip text="Toggle Theme" :popper="{ strategy: 'absolute' }">
        <Icon :name="isDark ? 'ph:cloud-sun-duotone' : 'ph:moon-stars-duotone'" size="24px" />
      </UTooltip> -->
    <ClientOnly>
      <UButton
        :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
        color="gray"
        variant="ghost"
        aria-label="Theme"
        :padded="false"
        @click="isDark = !isDark"
      />
      <template #fallback>
        <USkeleton class="h-5 w-5" :ui="{ rounded: 'rounded-full' }" />
      </template>
    </ClientOnly>
    <!-- </button> -->
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

onMounted(() => {
  console.log(isDark)
})
</script>

<style></style>
