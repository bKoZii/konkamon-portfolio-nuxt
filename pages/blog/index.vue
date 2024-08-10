<template>
  <div>
    <div class="flex flex-col lg:flex-row justify-between items-center mb-3">
      <PageHeader title="My Blog" description="รวม Blog ต่างๆ ทั้งด้าน IT, Tips และอื่นๆ" />
      <div class="mt-5 lg:m-0 ">
        <span class="text-xs text-neutral-500">Powered by
        </span>
        <a href="https://strapi.io/" target="_blank" rel="noopener noreferrer"
          class="ml-1 p-1 dark:rounded-lg dark:bg-indigo-100">
          <UIcon name="logos:strapi" class="inline-block" mode="svg" />
        </a>
      </div>
    </div>

    <div class="my-4">
      <UInput :loading="loading" type="text" size="lg" icon="ph:magnifying-glass" placeholder="ค้นหา Blog..."
        v-model="searchInput" />
    </div>

    <div v-if="blogsData">
      <section class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <ClientOnly>
          <div v-for="(post, index) in blogsData" :key="index">
            <BlogIndexCard :post="post" />
          </div>
          <template #fallback>
            <div v-for="fallback in 4" :key="fallback">
              <BlogSkeletonFallback />
            </div>
          </template>
        </ClientOnly>
      </section>
    </div>
    <div v-else>
      <UAlert icon="ic:round-search-off" title="ไม่พบ Blogs" :description="`ไม่พบ Blogs จากคำค้นหา ${searchInput}`"
        color="primary" variant="soft" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type StrapiBlogs } from '~/types/StrapiBlogs';

const { find } = useStrapi()
const loading = ref(false)
const route = useRoute()
const router = useRouter()
const blogsData = ref<StrapiBlogs[]>()
const searchInput = ref(route.query.search as string)

const fetchBlogs = async (searchQuery?: string[]) => {
  const baseParams = {
    fields: ['title', 'subtitle', 'publishedAt', 'slug'],
    sort: 'publishedAt:desc',
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

  const searchParams = searchQuery
    ? {
      filters: {
        $or: [{ title: { $containsi: searchQuery } }, { subtitle: { $containsi: searchQuery } }]
      }
    }
    : {}

  const params = { ...baseParams, ...searchParams }

  try {
    const { data } = await find<StrapiBlogs>('blogs', params)

    if (data) {
      blogsData.value = data.map((item) => item.attributes)
    }
  } catch (error) {
    console.error(error)
  }
}

await fetchBlogs()

let timeout: NodeJS.Timeout | null = null
watch(searchInput, () => {
  if (timeout) {
    clearTimeout(timeout)
  }
  timeout = setTimeout(async () => {
    await router.replace({ query: { search: searchInput.value } })
    if (searchInput.value) {
    } else {
      router.replace({ path: '/blog/' })
    }
    await fetchBlogs([route.query.search as string, route.query.page as string])

  }, 500)
})

useSeoMeta({
  title: 'Blogs',
  ogTitle: '%s - Konkamon Sion',
  description: 'รวม Blog ต่างๆ ทั้งด้าน IT, Tips และอื่นๆ จากนาย กรกมล ศรีอ่อน',
  ogDescription: 'รวม Blog ต่างๆ ทั้งด้าน IT, Tips และอื่นๆ จากนาย กรกมล ศรีอ่อน',
  ogImage: '/ogImage-blogs.webp',
  ogUrl: 'https://www.konkamon.live/blog'
})
useMySlugCacheStore()
</script>
