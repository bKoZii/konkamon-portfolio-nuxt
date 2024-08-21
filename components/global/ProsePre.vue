<template>
  <div class="pre">
    <div class="rounded-t-lg border-b-0 bg-neutral-900 p-2 text-xs dark:border dark:border-neutral-700 dark:bg-neutral-900">
      <div class="flex flex-row flex-nowrap items-center gap-2">
        <UIcon v-if="language" :name="`vscode-icons:file-type-${language}`" mode="svg" class="inline-block size-5" /><span
          class="tracking-normal text-white"
          >{{ $props.filename }}</span
        >
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

defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String as () => BundledLanguage,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})
</script>

<style lang="scss">
.pre {
  overflow-x: hidden;

  &-body {
    padding: 0.75em;
    overflow-x: auto;

    code {
      display: inline-block;
      width: 100%;
    }
    &.has-focused {
      &:hover {
        .line:not(.focused) {
          filter: blur(0px);
          transition: filter 0.2s ease;
        }
      }
      .line:not(.focused) {
        filter: blur(2px) opacity(0.3);
        transition: filter 0.2s ease;
      }
    }
    .highlighted-word {
      border: 1px solid #888888;
      padding: 1px;
      border-radius: 5px;
      background-color: color-mix(in srgb, var(--shiki-default-bg) 70%, #888888);
    }
    .line {
      line-height: 1.6;

      span {
        background-color: transparent !important;
      }

      &.highlight,
      &.highlighted {
        background-color: color-mix(in srgb, var(--shiki-default-bg) 70%, #888888);
      }

      // &::before {
      //   content: attr(line);
      //   padding-right: 1.25rem;
      //   display: inline-block;
      //   opacity: 0.4;
      // }

      &.diff.remove {
        background-color: color-mix(in srgb, var(--shiki-default-bg) 65%, #f43f5e);
      }

      &.diff.add {
        background-color: color-mix(in srgb, var(--shiki-default-bg) 75%, #10b981);
      }
      &.warning {
        background-color: color-mix(in srgb, var(--shiki-default-bg) 75%, #f3ca52);
      }
    }
  }
}

pre code .line {
  display: block;
}
</style>
