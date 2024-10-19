<script setup>
import { useI18n } from 'vue-i18n'

const { locale, setLocale } = useI18n()
const currentLocale = ref(locale.value)

const toggleLocale = () => {
  const newLocale = currentLocale.value === 'en' ? 'th' : 'en'
  setLocale(newLocale)
  currentLocale.value = newLocale
}
</script>

<template>
  <ClientOnly>
    <UTooltip text="Switch Languages" :popper="{ strategy: 'absolute' }">
      <UButton
        :icon="currentLocale === 'en' ? 'circle-flags:us' : 'circle-flags:th'"
        class="size-5 drop-shadow"
        :padded="false"
        variant="ghost"
        @click="toggleLocale"
      />
    </UTooltip>

    <template #fallback>
      <USkeleton class="size-6" :ui="{ rounded: 'rounded-full' }" />
    </template>
  </ClientOnly>
</template>
