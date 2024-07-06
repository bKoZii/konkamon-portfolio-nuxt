<template>
  <div>
    <div class="flex flex-col gap-8">
      <article class="prose dark:prose-invert sm:prose-lg lg:prose max-w-none p-0 text-center lg:text-left">
        <h2>My Blog</h2>
        <p>รวม Blog ต่างๆ ด้าน IT / โดย Sanity CMS</p>
      </article>
      <section class="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2">
        <div v-for="(post, index) in data" :key="index">
          <ULink :to="`/blog/${post.slug.current}`">
            <UCard
              :ui="{
                body: {
                  base: 'hover:text-primary prose-h2:hover:text-primary',
                  padding: 'p-0 sm:px-0 sm:pt-0 md:p-0'
                }
              }"
            >
              <SanityImage :asset-id="post.mainImage?.asset._ref" class="rounded-t-lg" />
              <div class="prose prose-sm dark:prose-invert sm:prose-sm md:prose-md prose-h2:m-0 flex max-w-none flex-col gap-2 p-5">
                <h2>{{ post.title }}</h2>
                <section class="flex flex-row gap-1" v-if="post.categories">
                  <div v-for="(category, index) in post.categories" :key="index">
                    <UBadge size="xs">{{ category.title }}</UBadge>
                  </div>
                </section>
                <div class="flex flex-row items-center gap-1">
                  <UIcon name="ph:calendar-dots-duotone" class="size-5" />
                  <UTooltip :text="useFormatDate(post._createdAt)" :popper="{ arrow: true, strategy: 'absolute', offsetDistance: 0 }">
                    <p class="m-0 text-xs">{{ `${useRelativeDate(post._createdAt)}` }}</p>
                  </UTooltip>
                  <p class="m-0 text-xs">{{ `- ${post.author.name}` }}</p>
                </div>
              </div>
            </UCard>
          </ULink>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IBlogIndex } from '../../types/BlogIndexInterface'
const query = groq`*[_type == "post"] {
title,
  author->{name},
  mainImage {
    ...,
    asset{_ref}
  },
  categories[]->{title},
  slug{current},
  _createdAt
}
| order(_createdAt desc)`
const { data } = useSanityQuery<IBlogIndex>(query)
useSeoMeta({
  title: 'Blog - Konkamon Sion'
})
</script>

<style></style>
