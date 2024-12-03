<template>
  <template v-if="post">
    <NuxtLink :to="`/blog/${post.slug}`" prefetch-on="interaction">
      <UCard
        :ui="{
          base: 'hover:text-primary-500 dark:hover:text-primary-500 relative flex h-full items-center transition-all duration-100',
          ring: 'hover:ring-primary-300 ring-1 dark:hover:ring-2 dark:hover:ring-ocean-green-700',
          background: 'dark:bg-neutral-900',
          shadow: 'shadow hover:shadow-md dark:shadow-none',
          body: {
            padding: 'p-0 sm:px-0 sm:py-0 md:p-0',
          },
        }">
        <div class="flex flex-row items-center gap-4 p-4 md:gap-6">
          <NuxtImg
            v-if="post.blogIcon"
            :src="`${post.blogIcon.url}`"
            width="100%"
            class="hidden w-10 drop-shadow sm:block sm:w-16 sm:min-w-16"
            :alt="`ไอคอนประจำโพสต์ ${post.title}`"
            :aria-label="`ไอคอนประจำโพสต์ ${post.title}`" />
          <div>
            <h3 class="text-balance text-base font-semibold md:text-lg">
              {{ post.title }}
            </h3>
            <p
              class="mt-1 line-clamp-2 text-balance text-xs text-neutral-600 dark:text-neutral-300">
              {{ post.subtitle }}
            </p>
            <section class="mt-4 flex flex-col flex-wrap gap-3 md:mt-2 md:flex-row">
              <div
                class="flex flex-row flex-nowrap items-center gap-1 text-neutral-800 dark:text-neutral-300">
                <UTooltip
                  :text="useFormatDate(post.publishedAt)"
                  :ui="{ wrapper: 'inline-flex gap-1' }"
                  :popper="{
                    arrow: true,
                    strategy: 'absolute',
                    offsetDistance: 15,
                    placement: 'top',
                  }">
                  <UIcon name="ph:calendar-dots-duotone" class="size-4" />
                  <span class="text-xs">{{ `${useRelativeDate(post.publishedAt)}` }}</span>
                </UTooltip>
              </div>
              <UDivider orientation="vertical" class="hidden md:block" />
              <div v-if="post.categories">
                <div v-for="category in post.categories" :key="category.documentId">
                  <NuxtLink :to="`/blog/tag/${category.name}`">
                    <UBadge
                      size="xs"
                      color="primary"
                      variant="soft"
                      :ui="{
                        base: 'z-10 h-full',
                        variant: {
                          soft: 'hover:bg-primary-500 dark:hover:bg-primary-800 hover:text-white',
                        },
                      }">
                      {{ category.name }}
                    </UBadge>
                  </NuxtLink>
                </div>
              </div>
            </section>
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
