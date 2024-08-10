<template>
  <div>
    <div v-if="blogSlug">
      <article class="flex flex-col gap-5">
        <ClientOnly>
          <section class="hidden sm:block">
            <UBreadcrumb divider="/" :links="[{ label: 'Konkamon\'s Blog', to: '/blog' }, { label: blogSlug.title }]" />
            <UDivider class="mt-3" />
          </section>
          <section class="flex flex-col gap-5">
            <div
              class="prose prose-sm md:prose-base dark:prose-invert prose-h1:m-0 prose-p:my-3 flex max-w-none flex-col gap-6">
              <div>
                <h1>{{ blogSlug.title }}</h1>
                <p class="text-xs sm:text-sm">{{ blogSlug.subtitle }}</p>
                <section class="flex flex-row gap-2" v-if="blogSlug.categories">
                  <div v-for="(category, index) in blogSlug.categories.data" :key="index">
                    <UBadge variant="soft">{{ category.attributes.name }}</UBadge>
                  </div>
                </section>
              </div>
              <div class="not-prose flex flex-col flex-nowrap gap-1">
                <div class="flex flex-row items-center space-x-2">
                  <UIcon name="ph:calendar-dots-duotone" class="size-6" />
                  <p class="m-0 text-sm">{{ `${useFormatDate(blogSlug.publishedAt ?? '')}` }}</p>
                </div>
                <p v-if="blogSlug.updatedAt" class="m-0 text-xs italic text-neutral-500">
                  {{ `แก้ไขล่าสุดเมื่อ: ${useFormatDate(blogSlug.updatedAt ?? '')}` }}
                </p>
              </div>
            </div>
            <section class="not-prose mt-2 space-y-2">
              <p class="text-sm font-bold">Share this Blog!</p>
              <SocialShare network="facebook" :label="false" class="h-7 w-7 rounded bg-blue-600 p-1 text-white" />
            </section>
            <NuxtImg :src="blogSlug.mainImage.data.attributes.url" class="rounded-lg" />
            <UDivider class="my-4" />
            <section
              class="prose prose-neutral dark:prose-invert prose-sm md:prose-base max-w-none font-sans prose-h1:mb-5 prose-h2:my-4">
              <ContentRenderer :value="content" v-bind="$attrs" />
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
import type { StrapiBlogSlug } from '~/types/StrapiBlogSlug';

const parsedMarkdown = ref()
const { findOne } = useStrapi()
const blogSlug = ref<StrapiBlogSlug>()
const route: RouteLocationNormalized = useRoute()
await useAsyncData('blogSlug', () =>
  findOne<StrapiBlogSlug>('blogs', route.params['slug'] as string, {
    fields: ['title', 'subtitle', 'publishedAt', 'slug', 'content', 'updatedAt', 'createdAt'],
    populate: {
      mainImage: true,
      createdBy: true,
      categories: {
        fields: ["name"]
      },
    }
  })
).then((item) => {
  blogSlug.value = item?.data?.value?.data?.attributes
})
const title = computed(() => `${blogSlug.value?.title}`)
useSeoMeta({
  title: title.value,
  ogTitle: '%s [Blogs - Konkamon]',
  titleTemplate: '%s [Blogs - Konkamon]',
  description: blogSlug.value?.subtitle,
  ogDescription: blogSlug.value?.subtitle,
  ogImage: blogSlug.value?.mainImage.data.attributes.url,
  ogUrl: `https://konkamon.vercel.app/blog/${blogSlug.value?.slug}`
})

const { data: content } = await useFetch(() => `/api/transform`, {
  method: "POST",
  body: {
    content: blogSlug.value?.content,
  },
});


</script>

<style></style>
