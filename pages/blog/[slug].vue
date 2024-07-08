<template>
  <div>
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
                  <UBadge variant="soft">{{ category.title }}</UBadge>
                </div>
              </section>
            </div>
            <div class="not-prose flex flex-col flex-nowrap gap-1">
              <div class="flex flex-row items-center space-x-2">
                <UAvatar :src="postData.author.image.asset.url" alt="Avatar" size="xs" />
                <p class="m-0 text-sm">{{ `${postData.author?.name}` }}</p>
              </div>
              <div class="flex flex-row items-center space-x-2">
                <UIcon name="ph:calendar-dots-duotone" class="size-6" />
                <p class="m-0 text-sm">{{ `${useFormatDate(postData._createdAt ?? '')}` }}</p>
              </div>
              <p v-if="postData._updatedAt" class="m-0 text-xs italic text-neutral-500">
                {{ `แก้ไขล่าสุดเมื่อ: ${useFormatDate(postData._updatedAt ?? '')}` }}
              </p>
            </div>
          </div>
          <SanityImage v-if="postData.mainImage" :asset-id="postData.mainImage?.asset._ref" auto="format" class="rounded-lg" />
          <UDivider class="my-4" />
          <section class="prose prose-neutral dark:prose-invert prose-sm md:prose-base max-w-none">
            <SanityContent :blocks="postData.body" :serializers="serializers" />
          </section>
        </section>
      </article>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BlogImage from '~/components/Blog/Image.vue'
import type { RouteLocationNormalized } from 'vue-router'
import type { IBlog } from '~/types/BlogInterface'
import BlogCodeBlock from '~/components/Blog/CodeBlock.vue'
const route: RouteLocationNormalized = useRoute()
const { $urlFor, $Prism } = useNuxtApp()
const sanity = useSanity()
const query = groq`*[_type == "post" && slug.current==$slug][0]{title,author->{image{asset->{url}}, name},introText, _createdAt,_updatedAt, mainImage, body, categories[]->{title}}`
const { data: postData } = await useAsyncData('blog', () => sanity.fetch<IBlog>(query, { slug: route.params['slug'] }))
const title = computed(() => `${postData.value?.title} - Blog`)

useSeoMeta({
  title: title.value,
  ogTitle: title.value,
  description: postData.value?.introText,
  ogDescription: postData.value?.introText,
  ogImage: $urlFor(postData.value?.mainImage?.asset?._ref!).url(),
})

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/vnd.microsoft.icon',
      href: '/favicon.png'
    }
  ]
})
const serializers = markRaw({
  types: {
    image: BlogImage,
    code: BlogCodeBlock
  }
})
onMounted(() => {
  $Prism.highlightAll()
})
</script>

<style></style>
