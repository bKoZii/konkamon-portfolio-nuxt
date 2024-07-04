<template>
  <div>
    <article class="flex flex-col gap-5">
      <section>
        <UBreadcrumb divider="/" :links="[{ label: 'Konkamon\'s Blog', to: '/post' }, { label: data?.title || '' }]" />
      </section>
      <section class="prose dark:prose-invert max-w-none">
        <h1>{{ data?.title }}</h1>
        <SanityImage v-if="data?.mainImage" :asset-id="data?.mainImage?.asset._ref" auto="format" class="rounded-lg" />
        <SanityContent :blocks="data?.body" />
      </section>
    </article>
  </div>
</template>

<script lang="ts" setup>
import type { RouteLocationNormalized } from 'vue-router'
import type { IBlog, Root2 } from '~/types/BlogInterface'
const route: RouteLocationNormalized = useRoute()
const query = groq`*[_type == "post" && slug.current==$slug ][0]`
const { data, refresh } = useLazySanityQuery<Root2>(query, { slug: route.params['slug'] })

const title = computed(() => `${data.value?.title} - Blog - Konkamon Sion`)

watch(data, () => {
  useHead({
    title: title.value ? title.value : 'Blog - Konkamon Sion'
  })
})
onUnmounted(() => {
  useHead({
    title: 'Blog - Konkamon Sion'
  })
})
</script>

<style></style>
