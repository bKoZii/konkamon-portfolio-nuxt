<template>
  <template v-if="post">
    <ULink :to="`/blog/${post.slug}`">

      <UCard :ui="{
        base: 'transition-all relative h-full flex items-center',
        ring: 'dark:ring-2 dark:hover:ring-ocean-green-700',
        background: 'dark:bg-neutral-800',
        shadow: 'shadow hover:shadow-lg dark:shadow-none dark:hover:shadow-none',
        body: {
          base: 'hover:text-primary prose-h2:hover:text-primary',
          padding: 'p-0 sm:px-0 sm:py-0 md:p-0'
        }
      }">
        <div class="flex flex-row items-center p-4 gap-6">
          <NuxtImg v-if="post.blogIcon" :src="`${post.blogIcon.data.attributes.url}`" width="100%"
            class="w-12 sm:w-16 drop-shadow" :alt="`ไอคอนประจำโพสต์ ${post.title}`"
            :aria-label="`ไอคอนประจำโพสต์ ${post.title}`" />
          <div
            class="md:prose-md prose prose-sm sm:prose-sm dark:prose-invert prose-h3:m-0 prose-p:m-0 flex max-w-none flex-col gap-2">
            <h3 class="">{{ post.title }}</h3>
            <p class="text-xs">{{ post.subtitle }}</p>
            <section class="not-prose flex flex-row gap-1" v-if="post.categories">
              <div v-for="category in post.categories.data" :key="category.id">
                <UBadge size="xs" color="primary" variant="soft">{{ category.attributes.name }}</UBadge>
              </div>
            </section>
            <div class="not-prose flex flex-row items-center gap-1">
              <UIcon name="ph:calendar-dots-duotone" class="size-5" />
              <UTooltip :text="useFormatDate(post.publishedAt)" :popper="{ arrow: true, strategy: 'absolute' }">
                <p class="m-0 text-xs">{{ `${useRelativeDate(post.publishedAt)}` }}</p>
              </UTooltip>
            </div>
          </div>
        </div>
      </UCard>
    </ULink>
  </template>
</template>

<script lang="ts" setup>
import type { StrapiBlogs } from '~/types/StrapiBlogs'
const props = defineProps<{ post: StrapiBlogs }>()
const { post } = toRefs(props)
</script>

<style></style>
