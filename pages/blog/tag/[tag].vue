<template>
  <div>
    <section class="flex flex-col items-center gap-2 md:flex-row">
      <h1 class="text-3xl font-bold">
        All Blogs With Tag:
      </h1>
      <UBadge
        size="lg"
        variant="subtle"
        :label="tagName"
      />
    </section>
    <section class="my-4">
      <UInput
        id="searchInput"
        v-model="searchInput"
        :loading="loading"
        type="text"
        size="lg"
        icon="ph:magnifying-glass"
        :placeholder="`ค้นหา Blog ที่มีแท็ก ${tagName}...`"
      >
        <template #trailing>
          <UKbd>F</UKbd>
        </template>
      </UInput>
    </section>
    <UDivider class="my-4" />
    <section>
      <template v-if="tagBlogs?.meta.pagination.total ?? 0 >= 0">
        <section class="flex flex-col flex-nowrap gap-3">
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
    <section v-if="tagBlogs?.meta.pagination.total" class="mt-5 flex justify-center">
      <UPagination
        v-model="currentPage"
        :total="tagBlogs.meta.pagination.total"
        :page-count="pageSize"
        show-first
        show-last
        :first-button="{ icon: 'ph:arrow-arc-left', label: 'First', color: 'white' }"
        :last-button="{ icon: 'ph:arrow-arc-right', label: 'Last', color: 'white' }"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { RouteLocationNormalized } from 'vue-router'
import type { StrapiBlogs } from '~/types/StrapiBlogs'

const { find } = useStrapi()
const route: RouteLocationNormalized = useRoute()
const tagName = route.params.tag as string
const currentPage = ref(1)
const pageSize = 6
const searchInput = ref('')
const loading = ref(false)

const constructSearchFilters = (searchInput: string) => {
  const keywords = searchInput.split(' ')
  const filters = keywords.map((keyword) => ({
    $or: [
      {
        categories: {
          name: {
            $containsi: tagName,
          },
        },
      },
    ],
    $and: [
      {
        title: {
          $containsi: keyword,
        },
      },
    ],
  }))
  return { $and: filters }
}
const { data: tagBlogs } = useNuxtData('tagBlogs')
const nuxt = useNuxtApp()
const { refresh } = await useAsyncData(
  'tagBlogs',
  () =>
    find<StrapiBlogs>('blogs', {
      filters: constructSearchFilters(searchInput.value),
      fields: ['title', 'subtitle', 'publishedAt', 'slug'],
      sort: 'publishedAt:desc',
      populate: {
        categories: {
          fields: ['name'],
        },
        blogIcon: {
          fields: ['url'],
        },
      },
      pagination: {
        page: currentPage.value,
        pageSize: pageSize,
      },
    }),
  {
    deep: false,
    getCachedData: (key) => {
      if (nuxt.isHydrating && nuxt.payload.data[key]) {
        return nuxt.payload.data[key]
      }
      if (nuxt.static.data[key]) {
        return nuxt.static.data[key]
      }
      return null
    },
  },
)

useSeoMeta({
  title: `Tag: ${tagName}`,
  ogTitle: '%s [Blogs - Konkamon]',
  titleTemplate: '%s [Blogs - Konkamon]',
  description: `รวม Blogs ที่มี Tag: '${tagName}'`,
  ogDescription: `รวม Blogs ที่มี Tag: '${tagName}'`,
  ogImage: '/ogImage-blogs.webp',
  ogUrl: `https://www.konkamon.live/blog/tag/${tagName}`,
})

const { start } = useTimeoutFn(async () => {
  loading.value = true
  currentPage.value = 1
  await refresh()
  loading.value = false
}, 500, { immediate: false })

watch(searchInput, () => {
  if (searchInput.value.length >= 3 && searchInput.value !== '') {
    start()
  } else if (searchInput.value === '') {
    refresh()
  }
})

defineShortcuts({
  f: {
    handler: () => {
      document.getElementById('searchInput')?.focus()
    },
  },
})
</script>
