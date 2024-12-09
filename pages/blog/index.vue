<template>
  <div>
    <div class="mb-3 flex flex-col items-center justify-between lg:flex-row">
      <PageHeader :title="$t('blogs.title')" :description="$t('blogs.subtitle')" />
      <div class="mt-5 text-xs text-neutral-500 lg:m-0">
        <span>Powered by </span>
        <a
          href="https://strapi.io/"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold text-indigo-700 dark:text-indigo-500">
          Strapi
        </a>
      </div>
    </div>

    <div class="my-4">
      <UInput
        id="searchInput"
        v-model="searchInput"
        :loading="loading"
        type="text"
        size="lg"
        icon="ph:magnifying-glass"
        :disabled="
          toggledTags.length != 0 && blogsData?.meta.pagination.total === 0 && !searchInput
        "
        :placeholder="
          toggledTags.length != 0
            ? $t('blogs.withTag.searchPlaceholder', { tagName: toggledTags.toString() })
            : $t('blogs.searchPlaceholder')
        "
        :ui="{ icon: { trailing: { pointer: '' } } }">
        <template #trailing>
          <UKbd v-show="searchInput == ''"> F </UKbd>
          <UButton
            v-show="searchInput !== ''"
            color="white"
            variant="ghost"
            icon="ic:baseline-close"
            @click="searchInput = ''" />
        </template>
      </UInput>
    </div>
    <section v-if="!route.query.search || !error">
      <BlogTagsDisplay @toggled-tags="(tag) => (toggledTags = tag)" />
      <UDivider class="my-6" />
    </section>

    <main v-if="blogsData?.data && blogsData?.meta.pagination.total >= 1">
      <section v-auto-animate class="flex flex-col flex-nowrap gap-3">
        <ClientOnly fallback-tag="div">
          <div v-for="post in blogsData.data" :key="post.documentId">
            <BlogIndexCard :post="post" />
          </div>
          <template #fallback>
            <div v-for="fallback in pageSize" :key="fallback">
              <LazyBlogSkeletonFallback />
            </div>
          </template>
        </ClientOnly>
      </section>
      <section class="mt-5 flex justify-center">
        <UPagination
          v-model="currentPage"
          :total="blogsData.meta.pagination.total"
          :page-count="pageSize"
          show-first
          show-last
          :first-button="{ icon: 'ph:arrow-arc-left', label: 'First', color: 'white' }"
          :last-button="{ icon: 'ph:arrow-arc-right', label: 'Last', color: 'white' }" />
      </section>
    </main>
    <div v-else>
      <LazyUAlert
        v-if="alertConfig"
        :title="alertConfig.title"
        :description="alertConfig.description"
        :icon="alertConfig.icon"
        :color="alertConfig.color"
        :variant="alertConfig.variant" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Strapi5ResponseMany } from '@nuxtjs/strapi'
import type { StrapiBlogs } from '~/types/StrapiBlogs'
import type { AlertColor, AlertVariant } from '#ui/types'

useMySlugCacheStore()
preloadComponents('MDC')

const { locale } = useI18n()
const { find } = useStrapi()
const loading = ref(false)
const route = useRoute()
const searchInput = ref('')
const debouncedSearchInput = refDebounced(searchInput, 500)
const currentPage = ref(1)
const pageSize = 6
const { data: blogsData } = useNuxtData<Strapi5ResponseMany<StrapiBlogs>>('allBlogsWithSearch')
const toggledTags = ref<string[]>([])

const constructFilters = computed(() => {
  const searchKeywords = searchInput.value.split(' ')
  const searchFilters = searchKeywords.map((keyword) => ({
    $or: [{ title: { $containsi: keyword } }, { subtitle: { $containsi: keyword } }],
  }))

  const tagFilters = toggledTags.value.map((tag) => ({
    $or: [{ categories: { name: { $containsi: tag } } }],
  }))

  return { $and: [...searchFilters, ...tagFilters] }
})

const { status, error, refresh } = await useAsyncData(
  'allBlogsWithSearch',
  () =>
    find<StrapiBlogs>('blogs', {
      fields: ['title', 'subtitle', 'createdAt', 'publishedAt', 'slug'],
      sort: 'publishedAt:desc',
      populate: {
        categories: {
          fields: ['name'],
        },
        blogIcon: {
          fields: ['url'],
        },
      },
      locale: locale.value,
      pagination: {
        page: currentPage.value,
        pageSize: pageSize,
      },
      filters: constructFilters.value,
    }),
  {
    deep: false,
    lazy: true,
    watch: [currentPage, locale, toggledTags],
    default() {
      return blogsData.value
    },
  },
)
const { start, finish } = useLoadingIndicator()

const handleLoading = async (callback: () => Promise<void>) => {
  loading.value = true
  start()
  callback()
  finish()
  loading.value = false
}

watch(searchInput, () => {
  search()
  if (searchInput.value === '') {
    refresh()
  }
})

const search = useDebounceFn(async () => {
  if (searchInput.value.length >= 3 && searchInput.value !== '') {
    await handleLoading(refresh)
  }
}, 500)

useSeoMeta({
  title: 'Blogs',
  ogTitle: '%s - Konkamon Sion',
  description: 'รวม Blog ต่างๆ ทั้งด้าน IT, Tips และอื่นๆ จากนาย กรกมล ศรีอ่อน',
  ogDescription: 'รวม Blog ต่างๆ ทั้งด้าน IT, Tips และอื่นๆ จากนาย กรกมล ศรีอ่อน',
  ogImage: '/ogImage-blogs.webp',
  ogUrl: 'https://www.konkamon.live/blog',
})

defineShortcuts({
  f: {
    handler: () => {
      document.getElementById('searchInput')?.focus()
    },
  },
})

const alertConfig = computed(() => {
  if (status.value === 'pending') {
    return {
      title: 'Loading',
      description: 'กำลังค้นหา Blog กรุณารอสักครู่',
      icon: 'ph:magnifying-glass-duotone',
      color: 'primary' as AlertColor,
      variant: 'soft' as AlertVariant,
    }
  } else if (toggledTags.value) {
    return {
      title: 'ไม่พบ Blogs',
      description: `ไม่พบ Blogs ที่มีแท็กทั้งหมดดังนี้ '${toggledTags.value.toString()}'`,
      icon: 'ic:round-search-off',
      color: 'orange' as AlertColor,
      variant: 'subtle' as AlertVariant,
    }
  } else if (blogsData.value?.meta.pagination.total === 0 && status.value === 'success') {
    return {
      title: 'ไม่พบ Blogs',
      description: `ไม่พบ Blogs จากคำค้นหา '${debouncedSearchInput.value}'`,
      icon: 'ic:round-search-off',
      color: 'orange' as AlertColor,
      variant: 'subtle' as AlertVariant,
    }
  } else if (error.value?.statusCode || status.value === 'error') {
    return {
      title: 'Error',
      description: 'เกิดข้อผิดพลาดในการโหลดข้อมูล กรุณาลองใหม่อีกครั้งในภายหลัง',
      icon: 'ph:magnifying-glass-duotone',
      color: 'red' as AlertColor,
      variant: 'subtle' as AlertVariant,
    }
  }
  return null
})
</script>
