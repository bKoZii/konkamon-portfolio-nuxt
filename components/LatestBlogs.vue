<template>
  <div>
    <section class="mb-6 flex flex-row items-center justify-between">
      <h2 class="text-lg font-bold text-gray-500">Blogs ล่าสุด</h2>
      <UButton label="Blogs ทั้งหมด" variant="ghost" icon="ph:arrow-right" trailing to="/blog" />
    </section>
    <section class="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2">
      <ClientOnly>
        <div v-for="(post, index) in latestBlogs" :key="index">
          <BlogIndexCard :post="post" />
        </div>
        <template #fallback>
          <div v-for="fallback in 2" :key="fallback">
            <BlogSkeletonFallback />
          </div>
        </template>
      </ClientOnly>
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { Strapi4RequestParams } from '@nuxtjs/strapi';
import type { StrapiBlogs } from '~/types/StrapiBlogs';

const { find } = useStrapi()
const latestBlogs = ref<StrapiBlogs[]>()

const fetchBlogs = async () => {
  const params: Strapi4RequestParams = {
    fields: ['title', 'subtitle', 'publishedAt', 'slug'],
    sort: 'publishedAt:desc',
    pagination: {
      pageSize: 4,
      page: 1
    },
    populate: {
      mainImage: true,
      createdBy: true,
      categories: {
        fields: ['name']
      },
      blogIcon: {
        fields: ['url']
      }
    }
  }

  try {
    const { data } = await find<StrapiBlogs>('blogs', params)
    if (data) {
      latestBlogs.value = data.map((item) => item.attributes)
    }
  } catch (error) {
    console.error(error)
  }
}
await fetchBlogs()


</script>

<style></style>
