<template>
  <section class="text-gray-600 body-font mb-0 lg:mb-5">
    <!-- <div class="container mx-auto flex pt-4 flex-col-reverse lg:flex-row items-center gap-5"> -->
    <UContainer class="flex pt-4 flex-col-reverse lg:flex-row items-center gap-5" :ui="{ padding: 'px-0 lg:px-0', base: 'mx-auto' }">
      <div class="lg:flex-grow flex flex-col mb-16 md:mb-0 items-start prose dark:prose-invert">
        <h1 class="sm:text-4xl text-3xl mb-2 font-bold">นาย กรกมล ศรีอ่อน</h1>
        <p class="font mb-8">นักศึกษา มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย คณะวิทยาศาสตร์และเทคโนโลยี แผนกเทคโนโลยีสารสนเทศ</p>
        <UButton
          @click="toast.add({ title: 'Coming Soon!', icon: 'mdi:information' })"
          icon="ph:file-text-fill"
          class="p-2 hover:scale-105 transition-transform active:scale-100"
          color="primary"
          size="lg"
          block
          >Download CV</UButton
        >
      </div>
      <div class="lg:max-w-lg w-fit sm:w-1/2">
        <NuxtImg src="/me-rmutsv-square.webp" class="object-contain object-center rounded-lg shadow-md" width="100%" height="100%" />
      </div>
    </UContainer>
    <!-- </div> -->
  </section>
</template>

<script lang="ts" setup>
const toast = useToast()
</script>

<style></style>
