<template>
  <div class="inline-flex">
    <ClientOnly>
      <UTooltip text="Switch Theme" :popper="{ strategy: 'absolute' }">
        <UButton square @click="switchColorMode" :padded="false" size="xl" color="black" variant="ghost" :icon="iconName" class="group">
          <template #trailing>
            <span class="block text-sm">{{ capitalize($colorMode.preference) }}</span>
          </template>
        </UButton>
      </UTooltip>

      <template #fallback>
        <USkeleton class="h-6 w-6" :ui="{ rounded: 'rounded-full' }" />
      </template>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { capitalize } from 'vue'
const colorMode = useColorMode()

const ColorModeList = ['light', 'dark', 'system'] as const
type ColorMode = (typeof ColorModeList)[number]

const switchColorMode = () => {
  const currentIndex = ColorModeList.indexOf(colorMode.preference as ColorMode)
  const nextIndex = (currentIndex + 1) % ColorModeList.length
  colorMode.preference = ColorModeList[nextIndex]
}

const iconName = computed(() => {
  const iconNameMap: Record<ColorMode, string> = {
    system: 'monitor-duotone',
    light: 'sun-duotone',
    dark: 'moon-duotone'
  }
  const iconName = colorMode.preference as ColorMode
  return `ph:${iconNameMap[iconName]}`
})
</script>

<style></style>
