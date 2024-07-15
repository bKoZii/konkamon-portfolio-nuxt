<template>
  <div>
    <div v-if="postData">
      <article class="flex flex-col gap-5">
        <ClientOnly>
          <section class="hidden sm:block">
            <UBreadcrumb divider="/" :links="[{ label: 'Konkamon\'s Blog', to: '/blog' }, { label: postData.title }]" />
            <UDivider class="mt-3" />
          </section>
          <section class="flex flex-col gap-5">
            <div class="prose prose-sm md:prose-base dark:prose-invert prose-h1:m-0 prose-p:my-3 flex max-w-none flex-col gap-6">
              <div>
                <h1>{{ postData.title }}</h1>
                <p class="text-xs sm:text-sm">{{ postData.introText }}</p>
                <section class="flex flex-row gap-2" v-if="postData.categories">
                  <div v-for="(category, index) in postData.categories" :key="index">
                    <UBadge variant="soft">{{ category.title }}</UBadge>
                  </div>
                </section>
              </div>
              <div class="not-prose flex flex-col flex-nowrap gap-1">
                <div class="flex flex-row items-center space-x-2">
                  <SanityImage :asset-id="postData.author.image.asset._ref" w="48" fit="clip" auto="format" class="h-6 w-6 rounded-lg" />
                  <p class="m-0 text-sm">{{ `${postData.author?.name}` }}</p>
                </div>
                <div class="flex flex-row items-center space-x-2">
                  <UIcon name="ph:calendar-dots-duotone" class="size-6" />
                  <p class="m-0 text-sm">{{ `${useFormatDate(postData._createdAt ?? '')}` }}</p>
                </div>
                <p v-if="postData._updatedAt && postData._updatedAt !== postData._createdAt" class="m-0 text-xs italic text-neutral-500">
                  {{ `แก้ไขล่าสุดเมื่อ: ${useFormatDate(postData._updatedAt ?? '')}` }}
                </p>
              </div>
            </div>
            <section class="not-prose mt-2 space-y-2">
              <p class="text-sm font-bold">Share this Blog!</p>
              <SocialShare network="facebook" :label="false" class="h-7 w-7 rounded bg-blue-600 p-1 text-white" />
            </section>
            <SanityImage v-if="postData.mainImage" :asset-id="postData.mainImage?.asset._ref" auto="format" class="rounded-lg" />
            <UDivider class="my-4" />
            <section class="prose prose-neutral dark:prose-invert prose-sm md:prose-base max-w-none">
              <SanityContent :blocks="postData.body" :serializers="serializers" />
            </section>
          </section>
          <template #fallback>
            <BlogSlugFallback />
          </template>
        </ClientOnly>
      </article>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { RouteLocationNormalized } from 'vue-router'
import type { IBlog } from '~/types/BlogInterface'
import { BlogImage, BlogCodeBlock } from '#components'
const route: RouteLocationNormalized = useRoute()
const { $urlFor } = useNuxtApp()
const sanity = useSanity()
const query = groq`*[_type == "post" && slug.current==$slug][0]{title,author->{image{asset{_ref}}, name},introText, _createdAt,_updatedAt, mainImage, body,slug{current}, categories[]->{title}}`
const { data: postData } = await useAsyncData('blog', () => sanity.fetch<IBlog>(query, { slug: route.params['slug'] }))
const title = computed(() => `${postData.value?.title}`)

useSeoMeta({
  title: title.value,
  ogTitle: '%s [Blogs - Konkamon]',
  description: postData.value?.introText,
  ogDescription: postData.value?.introText,
  ogImage: $urlFor(postData.value?.mainImage?.asset?._ref!).url(),
  ogUrl: `https://konkamon.vercel.app/blog/${postData.value?.slug?.current}`
})

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/vnd.microsoft.icon',
      href: '/favicon.ico'
    }
  ],
  titleTemplate: '%s [Blogs - Konkamon Sion]'
})
const serializers = markRaw({
  types: {
    image: BlogImage,
    code: BlogCodeBlock
  }
})
</script>

<style></style>
