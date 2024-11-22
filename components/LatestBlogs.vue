<template>
  <div>
    <section class="mb-6 flex flex-row items-center justify-between">
      <h2 class="text-lg font-bold text-gray-500 dark:text-gray-400">
        {{ $t('home.latestBlogs.title') }}
      </h2>
      <UButton
        :label="$t('home.latestBlogs.allBlogsBtn')"
        variant="ghost"
        icon="ph:arrow-right"
        trailing
        to="/blog"
      />
    </section>
    <section v-auto-animate class="flex flex-col flex-nowrap gap-3">
      <ClientOnly>
        <div v-for="post in latestBlogs?.data" :key="post.documentId">
          <BlogIndexCard :post="post" />
        </div>
        <template #fallback>
          <div v-for="fallback in 2" :key="fallback">
            <BlogSkeletonFallback />
          </div>
        </template>
        <div v-if="status == 'pending' && !latestBlogs">
          <LazyUAlert
            title="Loading"
            icon="ph:magnifying-glass-duotone"
            description="กำลังโหลด Blog กรุณารอสักครู่"
            color="primary"
            variant="subtle"
          />
        </div>
        <div v-if="error && status == 'error'">
          <LazyUAlert
            title="Error"
            icon="ph:warning-circle-duotone"
            description="เกิดข้อผิดพลาดในการโหลดข้อมูล กรุณาลองใหม่อีกครั้งในภายหลัง"
            color="red"
            variant="subtle"
          />
        </div>
      </ClientOnly>
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { StrapiBlogs } from '~/types/StrapiBlogs'

const { locale } = useI18n()
const { find } = useStrapi()

const {
  data: latestBlogs,
  error,
  status,
} = await useLazyAsyncData(
  async () => {
    return await find<StrapiBlogs>('blogs', {
      fields: ['title', 'subtitle', 'createdAt', 'slug', 'publishedAt', 'updatedAt'],
      sort: 'publishedAt:desc',
      locale: locale.value,
      pagination: {
        pageSize: 2,
        page: 1,
      },
      populate: {
        categories: {
          fields: ['name'],
        },
        mainImage: {
          fields: ['url'],
        },
        blogIcon: {
          fields: ['url'],
        },
      },
    })
  },
  {
    deep: false,
    server: false,
    pick: ['data'],
    watch: [locale],
  },
)
preloadRouteComponents('/blog/[slug].vue')
</script>
