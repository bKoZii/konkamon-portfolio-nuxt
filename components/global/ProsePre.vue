<template>
  <div class="pre">
    <div class="rounded-t-lg border-b-0 bg-neutral-900 p-2 text-xs dark:border dark:border-neutral-700 dark:bg-neutral-900">
      <div class="flex flex-row flex-nowrap items-center justify-between gap-2 text-white">
        <span class="tracking-normal">{{ $props.filename }}</span>
        <UButton
          variant="solid"
          class="p-1"
          :color="codeCopied ? 'primary' : 'white'"
          size="xs"
          :icon="codeCopied ? 'ph:check-square-duotone' : 'ph:clipboard-duotone'"
          aria-label="Copy Code"
          :label="codeCopied ? 'Copied!' : 'Copy Code'"
          @click="copyCode"
        />
      </div>
    </div>
    <pre
      class="pre-body"
      :class="`${$props.class} !mt-0 !rounded-t-none tracking-normal dark:border dark:border-t-0 dark:border-neutral-700`"
    ><slot /></pre>
  </div>
</template>

<script setup lang="ts">
import type { BundledLanguage } from 'shiki'

const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String as () => BundledLanguage,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})

const codeCopied = ref(false)
const copyCode = async (): Promise<void> => {
  try {
    await navigator.clipboard.writeText(props.code)
    codeCopied.value = true
    setTimeout(() => {
      codeCopied.value = false
    }, 1500)
  } catch (error) {
    console.error('Error: Unable to copy code.', error)
  }
}
</script>

<style scoped>
.pre {
  overflow-x: hidden;
}
.pre-body {
  padding: 0.75em;
  overflow-x: auto;
}
.pre-body code {
  display: inline-block;
  width: 100%;
}
.pre-body.has-focused:hover .line:not(.focused) {
  filter: blur(0px);
  transition: filter 0.2s ease;
}
.pre-body.has-focused .line:not(.focused) {
  filter: blur(2px) opacity(0.3);
  transition: filter 0.2s ease;
}
.pre-body .highlighted-word {
  border: 1px solid #888;
  padding: 1px;
  border-radius: 5px;
  background-color: color-mix(in srgb, var(--shiki-default-bg) 70%, #888);
}
.pre-body .line {
  line-height: 1.6;
}
.pre-body .line span {
  background-color: transparent !important;
}
.pre-body .line.highlight,
.pre-body .line.highlighted {
  background-color: color-mix(in srgb, var(--shiki-default-bg) 70%, #888);
}
.pre-body .line.diff.remove {
  background-color: color-mix(in srgb, var(--shiki-default-bg) 65%, #f43f5e);
}
.pre-body .line.diff.add {
  background-color: color-mix(in srgb, var(--shiki-default-bg) 75%, #10b981);
}
.pre-body .line.warning {
  background-color: color-mix(in srgb, var(--shiki-default-bg) 75%, #f3ca52);
}
pre code .line {
  display: block;
}
</style>
