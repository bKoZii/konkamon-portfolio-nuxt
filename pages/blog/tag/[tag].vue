<template>
  <div>
    <section class="flex flex-row items-center gap-2">
      <h1 class="text-3xl font-bold">All Blogs With Tag:</h1>
      <UBadge size="lg" variant="subtle" :label="tagName" />
    </section>
    <UDivider class="my-4" />
    <section>
      <template v-if="tagBlogs?.data.length ?? 0 >= 0">
        <section class="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div v-for="tagBlogItems in tagBlogs?.data" :key="tagBlogItems.id">
            <BlogIndexCard :post="tagBlogItems.attributes" />
          </div>
        </section>
      </template>
      <div v-else>
        <UAlert
          title="No Blogs Found"
          :description="`ไม่พบ Blogs ที่มี Tag: ${tagName}`"
          color="orange"
          icon="ph:warning-circle-duotone"
          variant="subtle"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { RouteLocationNormalized } from 'vue-router'
import type { StrapiBlogs } from '~/types/StrapiBlogs'
const { find } = useStrapi()
const route: RouteLocationNormalized = useRoute()
const tagName = route.params.tag as string

const { data: tagBlogs } = await useAsyncData('tagBlogs', () =>
  find<StrapiBlogs>('blogs', {
    filters: {
      $or: [
        {
          categories: {
            name: {
              $containsi: tagName
            }
          }
        }
      ]
    },
    fields: ['title', 'subtitle', 'publishedAt', 'slug'],
    sort: 'publishedAt:desc',
    populate: {
      categories: {
        fields: ['name']
      },
      blogIcon: {
        fields: ['url']
      }
    }
  })
)

useSeoMeta({
  title: `Tag: ${tagName}`,
  ogTitle: '%s [Blogs - Konkamon]',
  titleTemplate: '%s [Blogs - Konkamon]',
  description: `รวม Blogs ที่มี Tag: '${tagName}'`,
  ogDescription: `รวม Blogs ที่มี Tag: '${tagName}'`,
  ogImage: '/ogImage-blogs.webp',
  ogUrl: 'https://www.konkamon.live/blog'
})
</script>