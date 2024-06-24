<template>
  <div>
    <button class="inline-flex text-gray-400 group relative hover:text-gray-900 dark:hover:text-gray-100" @click="isDark = !isDark">
      <UTooltip text="Toggle Theme" :popper="{ strategy: 'absolute' }">
        <Icon :name="colorMode.value == 'dark' ? 'ph:cloud-sun-duotone' : 'ph:moon-stars-duotone'" size="24px" />
      </UTooltip>
    </button>
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
</script>

<style></style>
