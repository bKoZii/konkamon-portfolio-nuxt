<template>
  <div v-if="postData">
    <article class="flex flex-col gap-5">
      <section>
        <UBreadcrumb divider="/" :links="[{ label: 'Konkamon\'s Blog', to: '/blog' }, { label: postData.title || '' }]" />
      </section>
      <UDivider />
      <section class="flex flex-col gap-5">
        <div class="prose prose-sm md:prose-base dark:prose-invert prose-h1:mb-3 prose-p:mb-1 flex max-w-none flex-col gap-6">
          <div>
            <h1>{{ postData.title }}</h1>
            <section class="flex flex-row gap-2" v-if="postData.categories">
              <div v-for="(category, index) in postData.categories" :key="index">
                <UBadge>{{ category.title }}</UBadge>
              </div>
            </section>
          </div>
          <div class="not-prose flex flex-col flex-nowrap gap-1">
            <p class="m-0 text-sm"><UIcon name="ph:user-circle-duotone" class="size-5" /> {{ `${postData.author?.name}` }}</p>
            <p class="m-0 text-sm"><UIcon name="ph:calendar-dots-duotone" class="size-5" /> {{ `${useFormatDate(postData._createdAt ?? '')}` }}</p>
            <p v-if="postData._updatedAt" class="m-0 text-xs italic text-neutral-500">
              {{ `แก้ไขล่าสุดเมื่อ: ${useFormatDate(postData._updatedAt ?? '')}` }}
            </p>
          </div>
        </div>
        <SanityImage v-if="postData.mainImage" :asset-id="postData.mainImage?.asset._ref" auto="format" class="rounded-lg" />
        <UDivider class="my-4" />
        <section class="prose prose-neutral dark:prose-invert prose-sm md:prose-base max-w-none text-justify">
          <SanityContent :blocks="postData.body" :serializers="serializers" />
        </section>
      </section>
    </article>
  </div>
</template>

<script lang="ts" setup>
import BlogImage from '~/components/Blog/Image.vue'
import type { RouteLocationNormalized } from 'vue-router'
import type { IBlog } from '~/types/BlogInterface'
const route: RouteLocationNormalized = useRoute()

/* groq */
const query = groq`*[_type == "post" && slug.current==$slug][0]{title,author->{name}, _createdAt,_updatedAt, mainImage, body, categories[]->{title}}`
const { data: postData } = useLazySanityQuery<IBlog>(query, { slug: route.params['slug'] })
const title = computed(() => `${postData.value?.title} - Blog - Konkamon Sion`)
watch(postData, () => {
  useHead({
    title: title.value ? title.value : 'Blog - Konkamon Sion'
  })
})
onUnmounted(() => {
  useHead({
    title: 'Blog - Konkamon Sion'
  })
})

const serializers = markRaw({
  types: {
    image: BlogImage
  }
})
</script>

<style></style>
