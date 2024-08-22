<template>
  <div>
    <UDivider class="my-10" />
    <section
      class="prose prose-neutral dark:prose-invert prose-sm md:prose-base prose-h1:mb-5 prose-h2:my-4 prose-pre:text-sm prose-pre:m-0 prose-li:my-1 max-w-none font-sans tracking-tight">
      <MDCRenderer :body="ast?.body" :data="ast?.data" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { StrapiBlogSlug } from '~/types/StrapiBlogSlug'

const blogSlugProp = defineProps({
  blogContent: {
    type: String as PropType<StrapiBlogSlug['content']>,
    default: {}
  }
})

const { data: ast } = await useFetch(() => `/api/mdc-transform`, {
  method: 'POST',
  body: {
    content: blogSlugProp.blogContent
  }
})
</script>
