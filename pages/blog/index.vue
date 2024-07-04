<template>
  <div class="flex flex-col gap-8">
    <article class="prose dark:prose-invert sm:prose-lg lg:prose max-w-none text-center lg:text-left">
      <h2>My Blog</h2>
      <p>รวม Blog ต่างๆ ด้าน IT / โดย Sanity CMS</p>
    </article>
    <section class="grid grid-cols-2 gap-3">
      <ClientOnly>
        <div v-for="(post, index) in data" :key="index">
          <ULink :to="`blog/${post.slug.current}`">
            <UCard
              :ui="{
                header: {
                  base: 'hover:text-primary prose-h2:hover:text-primary',
                  padding: 'px-2 sm:px-0 sm:pt-0'
                }
              }"
            >
              <template #header>
                <SanityImage v-if="post.mainImage" :asset-id="post.mainImage?.asset._ref" auto="format" class="rounded-t-lg" />
                <div class="prose dark:prose-invert max-w-none px-4 py-5 sm:p-6">
                  <h2>{{ post.title }}</h2>
                  <p>{{ post.introText }}</p>
                </div>
              </template>
            </UCard>
          </ULink>
        </div>
        <template #fallback>
          <div v-for="a in 4" :key="a">
            <USkeleton class="h-64 w-full" />
          </div>
        </template>
      </ClientOnly>
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { IBlog } from '~/types/BlogInterface'
const query = groq`*[_type == "post"]{title, mainImage, introText, slug}`
const { data, refresh } = useSanityQuery<IBlog>(query)
useSeoMeta({
  title: 'Blog - Konkamon Sion'
})
</script>

<style></style>
