<template>
  <div>
    <UAlert
      v-if="alertMessage"
      title="Error"
      :description="alertMessage"
      color="red"
      variant="subtle"
      icon="ph:warning-circle-duotone"
      class="mb-5"
      :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'red', variant: 'link', padded: false }"
      @close="router.replace({ path: '/blog/' })"
    />
    <div class="mb-3 flex flex-col items-center justify-between lg:flex-row">
      <PageHeader title="My Blog" description="รวม Blog ต่างๆ ทั้งด้าน IT, Tips และอื่นๆ" />
      <div class="mt-5 text-xs text-neutral-500 lg:m-0">
        <span>Powered by </span>
        <a href="https://strapi.io/" target="_blank" rel="noopener noreferrer" class="font-bold text-indigo-700 dark:text-indigo-500"> Strapi </a>
      </div>
    </div>

    <div class="my-4">
      <UInput :loading="loading" type="text" size="lg" icon="ph:magnifying-glass" placeholder="ค้นหา Blog..." v-model="searchInput" />
    </div>
    <section v-if="!route.query.search">
      <BlogTagsDisplay />
      <UDivider class="my-6" />
    </section>

    <main v-if="blogsData && blogsData.length > 0 && status === 'success'">
      <section class="grid grid-cols-1 gap-3 md:grid-cols-2">
        <ClientOnly>
          <div v-for="post in blogsData" :key="post.slug">
            <LazyBlogIndexCard :post="post" />
          </div>
          <template #fallback>
            <div v-for="fallback in 4" :key="fallback">
              <BlogSkeletonFallback />
            </div>
          </template>
        </ClientOnly>
      </section>
    </main>
    <UAlert
      v-else-if="status === 'pending'"
      title="Loading"
      description="กำลังค้นหา Blog กรุณารอสักครู่"
      icon="ph:magnifying-glass-duotone"
      color="primary"
      variant="soft"
    />

    <UAlert
      v-else-if="route.query.search && blogsData?.length === 0 && status === 'success'"
      icon="ic:round-search-off"
      title="ไม่พบ Blogs"
      :description="`ไม่พบ Blogs จากคำค้นหา ${route.query.search}`"
      color="orange"
      variant="subtle"
    />
    <UAlert
      v-else-if="error?.statusCode || status === 'error'"
      title="Error"
      description="เกิดข้อผิดพลาดในการโหลดข้อมูล กรุณาลองใหม่อีกครั้งในภายหลัง"
      icon="ph:magnifying-glass-duotone"
      color="red"
      variant="subtle"
    />
  </div>
</template>

<script lang="ts" setup>
useMySlugCacheStore()

import { type StrapiBlogs } from '~/types/StrapiBlogs'

const { find } = useStrapi()
const loading = ref(false)
const route = useRoute()
const router = useRouter()
const searchInput = ref('')
const toast = useToast()
const nuxt = useNuxtApp()
const {
  data: blogsData,
  status,
  error,
  refresh
} = await useAsyncData(
  'searchTest',
  () =>
    find<StrapiBlogs>('blogs', {
      fields: ['title', 'subtitle', 'publishedAt', 'slug'],
      sort: 'publishedAt:desc',
      populate: {
        categories: {
          fields: ['name']
        },
        blogIcon: {
          fields: ['url']
        }
      },
      filters: {
        $or: [{ title: { $containsi: searchInput.value } }, { subtitle: { $containsi: searchInput.value } }]
      }
    }).then((data) => data.data.map((item) => item.attributes)),
  {
    deep: false,
    watch: false,
    lazy: true,
    getCachedData(key) {
      const data = nuxt.payload.data[key] || nuxt.static.data[key]
      if (!data) {
        return
      }

      const expirationDate = new Date(data.fetchedAt)
      expirationDate.setTime(expirationDate.getTime() + 10 * 1000)
      const isExpired = expirationDate.getTime() < Date.now()
      if (isExpired) {
        return
      }
      return data
    }
  }
)
if (error.value) {
  toast.add({
    title: 'Error',
    description: 'เกิดข้อผิดพลาดในการโหลดข้อมูล กรุณาลองใหม่อีกครั้งในภายหลัง',
    color: 'red',
    icon: 'ph:warning-circle-duotone'
  })
}

let timeout: NodeJS.Timeout | null = null
watch(searchInput, () => {
  if (timeout) {
    clearTimeout(timeout)
  }
  timeout = setTimeout(async () => {
    await refresh()
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

const alertMessage = computed(() => {
  if (route.query.notfound) {
    return `ไมพบ Blog จาก Link ของคุณ : ${route.query.link}`
  } else if (route.query.unpublished) {
    return `Blog จาก Link '${route.query.link}' ถูกยกเลิกการเผยแพร่แล้ว`
  }
  return null
})
</script>
