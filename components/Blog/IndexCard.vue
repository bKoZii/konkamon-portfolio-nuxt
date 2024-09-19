<template>
  <template v-if="post">
    <NuxtLink :to="`/blog/${post.slug}`" prefetch-on="interaction">
      <UCard
        :ui="{
          base: 'transition-shadow relative h-full flex items-center',
          ring: 'dark:ring-1 dark:hover:ring-2 dark:hover:ring-ocean-green-700',
          background: 'dark:bg-neutral-900',
          shadow: 'shadow hover:shadow-lg dark:shadow-none dark:hover:shadow-none',
          body: {
            base: 'hover:text-primary prose-h2:hover:text-primary',
            padding: 'p-0 sm:px-0 sm:py-0 md:p-0'
          }
        }"
      >
        <div class="flex flex-row items-center gap-4 p-4 md:gap-6">
          <NuxtImg
            v-if="post.blogIcon"
            :src="`${post.blogIcon.data.attributes.url}`"
            width="100%"
            class="w-10 drop-shadow sm:w-16"
            :alt="`ไอคอนประจำโพสต์ ${post.title}`"
            :aria-label="`ไอคอนประจำโพสต์ ${post.title}`"
          />
          <div>
            <h3 class="text-base font-semibold md:text-lg">{{ post.title }}</h3>
            <p class="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{{ post.subtitle }}</p>
            <section class="my-2 flex flex-row gap-1" v-if="post.categories">
              <div v-for="category in post.categories.data" :key="category.id">
                <UBadge size="xs" color="primary" variant="soft">{{ category.attributes.name }}</UBadge>
              </div>
            </section>
            <div class="flex flex-row items-center gap-1">
              <UIcon name="ph:calendar-dots-duotone" class="size-5 text-neutral-600 dark:text-neutral-200" />
              <UTooltip :text="useFormatDate(post.publishedAt)" :popper="{ arrow: true, strategy: 'absolute' }">
                <span class="text-xs">{{ `${useRelativeDate(post.publishedAt)}` }}</span>
              </UTooltip>
            </div>
          </div>
        </div>
      </UCard>
    </NuxtLink>
  </template>
</template>

<script lang="ts" setup>
import type { StrapiBlogs } from '~/types/StrapiBlogs'
const props = defineProps<{ post: StrapiBlogs }>()
const { post } = toRefs(props)
</script>