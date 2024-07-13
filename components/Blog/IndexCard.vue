<template>
  <template v-if="post">
    <ULink :to="`/blog/${post.slug.current}`">
      <UCard
        :ui="{
          base: 'hover:scale-[1.01] transition-all hover:drop-shadow-md',
          background: 'dark:bg-neutral-800',
          body: {
            base: 'hover:text-primary prose-h2:hover:text-primary',
            padding: 'p-0 sm:px-0 sm:pt-0 md:p-0'
          }
        }"
      >
        <SanityImage
          v-if="post.mainImage"
          :asset-id="post.mainImage?.asset._ref"
          class="rounded-t-lg"
          w="560"
          fit="clip"
          auto="format"
          :alt="`รูปภาพหลักของโพสต์ ${post.title}`"
          :aria-label="`รูปภาพหลักของโพสต์ ${post.title}`"
        />
        <div class="md:prose-md prose prose-sm flex max-w-none flex-col gap-2 p-5 sm:prose-sm dark:prose-invert prose-h2:m-0 prose-p:m-0">
          <div class="not-prose flex flex-row items-center space-x-2">
            <UAvatar :src="post.author.image.asset.url" alt="Avatar" size="xs" />
            <p class="m-0 text-xs">{{ `${post.author.name}` }}</p>
          </div>
          <h2>{{ post.title }}</h2>
          <p class="text-xs">{{ post.introText }}</p>
          <section class="not-prose flex flex-row gap-1" v-if="post.categories">
            <div v-for="(category, index) in post.categories" :key="index">
              <UBadge size="xs" color="primary" variant="soft">{{ category.title }}</UBadge>
            </div>
          </section>
          <div class="not-prose flex flex-row items-center gap-1">
            <UIcon name="ph:calendar-dots-duotone" class="size-5" />
            <UTooltip :text="useFormatDate(post._createdAt)" :popper="{ arrow: true, strategy: 'absolute' }">
              <p class="m-0 text-xs">{{ `${useRelativeDate(post._createdAt)}` }}</p>
            </UTooltip>
          </div>
        </div>
      </UCard>
    </ULink>
  </template>
</template>

<script lang="ts" setup>
import type { Root2 } from '~/types/BlogIndexInterface'
const prop = defineProps<{ post: Root2 }>()
const { post } = toRefs(prop)
</script>

<style></style>
