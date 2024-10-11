<template>
  <div class="relative">
    <div v-if="$props.filename" class="rounded-t-lg bg-neutral-900 p-2 text-xs border border-b border-neutral-600 dark:border-neutral-800 dark:border-b-0 dark:bg-neutral-900">
      <div class="flex flex-row flex-nowrap items-center justify-between gap-2 text-white">
        <span class="tracking-normal">{{ $props.filename }}</span>
        <UButton
          variant="soft"
          class="p-1"
          :color="copied ? 'primary' : 'white'"
          size="xs"
          :icon="copied ? 'ph:check-square-duotone' : 'ph:clipboard-duotone'"
          aria-label="Copy Code"
          :label="copied ? 'Copied!' : 'Copy Code'"
          @click="copy($props.code as string)"
        />
      </div>
    </div>
    <div v-else>
      <UButton
        variant="solid"
        class="p-1 absolute right-0 m-2"
        :color="copied ? 'primary' : 'white'"
        size="xs"
        :icon="copied ? 'ph:check-square-duotone' : 'ph:clipboard-duotone'"
        aria-label="Copy Code"
        :label="copied ? 'Copied!' : 'Copy Code'"
        @click="copy($props.code as string)"
      />
    </div>
    <div
      :class="`${$props.class} ${$props.filename ? 'prose-pre:rounded-t-none': 'rounded-t-lg'} !mt-0  tracking-normal m-0 prose-pre:m-0 `"
      v-html="html"
    />
  </div>
</template>

<script setup lang="ts">
import type { BundledLanguage } from 'shiki'

const toast = useToast()

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

const html = await useShikiHighlighted(props.code, { lang: props.language })

const { copy, copied } = useClipboard()

watch(copied, (value) => {
  if (value == true) {
    toast.add({
      title: 'Copied!',
      description: 'คัดลอก Code ไปยัง Clipboard แล้ว!',
      icon: 'ph:check-circle-duotone',
    })
  }
})
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
