<template>
  <section class="body-font mb-0 text-gray-600 lg:mb-5">
    <UContainer class="flex flex-col-reverse items-center justify-between gap-5 pt-4 lg:flex-row" :ui="{ padding: 'px-0 lg:px-0', base: 'mx-auto' }">
      <div class="prose prose-sm flex max-w-none flex-col items-center sm:prose-base dark:prose-invert md:mb-0 lg:flex-grow lg:items-start">
        <h1 class="mb-0 text-3xl font-bold sm:text-4xl md:mb-1">นาย กรกมล ศรีอ่อน</h1>
        <p class="text-center sm:text-left">นักศึกษา มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย คณะวิทยาศาสตร์และเทคโนโลยี แผนกเทคโนโลยีสารสนเทศ</p>
        <div class="flex w-full flex-col gap-2">
          <UButton
            @click="downloadCV()"
            icon="ph:file-text-fill"
            :loading="loading"
            class="p-2 transition-transform hover:scale-105 active:scale-100"
            color="primary"
            size="lg"
            block
            >Download CV - Thai</UButton
          >
          <UButton icon="ph:file-text-fill" block variant="link" to="/Resume">Open Resume</UButton>
        </div>
      </div>
      <div class="w-1/2 sm:w-1/2 lg:max-w-[20rem]">
        <NuxtImg
          src="/me-rmutsv-square.webp"
          class="rounded-lg object-contain object-center shadow-md"
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
        'Content-Type': 'application/pdf'
      }
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

<style></style>
