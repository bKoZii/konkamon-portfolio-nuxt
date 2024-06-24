<template>
  <div class="inline-flex">
    <ClientOnly>
      <UTooltip text="Toggle Theme" :popper="{ strategy: 'absolute' }">
        <button class="inline-flex text-gray-400 group relative hover:text-gray-900 dark:hover:text-gray-100" @click="isDark = !isDark">
          <Icon :name="isDark ? 'ph:cloud-sun-duotone' : 'ph:moon-stars-duotone'" size="24px" />
        </button>
      </UTooltip>

      <template #fallback>
        <USkeleton class="h-6 w-6" :ui="{ rounded: 'rounded-full' }" />
      </template>
    </ClientOnly>
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
