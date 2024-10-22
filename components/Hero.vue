<template>
  <section class="body-font mb-0 text-gray-600 lg:mb-5">
    <UContainer class="flex flex-col-reverse items-center justify-between gap-5 pt-4 lg:flex-row" :ui="{ padding: 'px-0 lg:px-0', base: 'mx-auto' }">
      <div
        class="prose prose-sm flex max-w-none flex-grow basis-full flex-col items-center justify-center sm:prose-base dark:prose-invert prose-h1:mb-0 lg:items-start"
      >
        <h1 class="text-3xl font-bold sm:text-4xl">
          {{ $t('home.hero.myName') }}
        </h1>
        <p class="text-center lg:text-left text-balance">
          {{ $t('home.hero.intro') }}
        </p>
        <div class="flex w-full flex-row items-center justify-center gap-2 lg:justify-start">
          <UButton
            icon="ph:file-text-fill"
            :loading="loading"
            color="primary"
            size="lg"
            @click="downloadCV()"
          >
            Download CV - Thai
          </UButton>
          <UButton
            icon="ph:file-text-fill"
            variant="soft"
            size="lg"
            to="/Resume"
          >
            Open Resume
          </UButton>
        </div>
      </div>
      <div class="basis-1/3">
        <NuxtImg
          src="https://res.cloudinary.com/dqx4sss9s/image/upload/v1724321379/me-rmutsv-square_hhiarv.webp"
          class="aspect-square size-40 rounded-lg shadow-md md:size-48 lg:size-full dark:shadow-none"
          width="100%"
          height="100%"
          alt="Picture of Me, Konkamon Sion"
          aria-label="Picture of Me, Konkamon Sion"
        />
      </div>
    </UContainer>
    <!-- </div> -->
  </section>
</template>

<script lang="ts" setup>
const loading = ref(false)
const downloadCV = async () => {
  try {
    loading.value = true

    const response = await fetch('/Resume_กรกมล_ศรีอ่อน.pdf', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    })

    const blob = await response.blob()
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = 'Resume_กรกมล_ศรีอ่อน.pdf'

    link.addEventListener('click', () => {
      loading.value = false
    })
    link.dispatchEvent(new MouseEvent('click'))
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>
