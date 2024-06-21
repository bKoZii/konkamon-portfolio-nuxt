<template>
  <section class="text-gray-600 body-font mb-5">
    <div class="container mx-auto flex pt-4 flex-col-reverse lg:flex-row items-center gap-5">
      <div class="lg:flex-grow flex flex-col mb-16 md:mb-0 items-start prose dark:prose-invert">
        <h1 class="sm:text-4xl text-3xl mb-2 font-bold">นาย กรกมล ศรีอ่อน</h1>
        <p class="font mb-8">นักศึกษา มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย คณะวิทยาศาสตร์และเทคโนโลยี แผนกเทคโนโลยีสารสนเทศ</p>
        <!-- <div class="flex justify-center">
          <button class="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg shadow">
            Download CV
          </button>
        </div> -->
        <button
          class="transition-all inline-flex gap-3 justify-center items-center w-auto p-2 text-white rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-primary to-primary-light hover:scale-105 dark:shadow-primary-dark hover:shadow-2xl hover:shadow-primary"
        >
          Download CV <Icon name="ph:file-text-fill" mode="svg" size="24px" />
        </button>
      </div>
      <div class="lg:max-w-lg w-fit sm:w-1/2">
        <NuxtImg src="/me-rmutsv-square.webp" class="object-contain object-center rounded-lg shadow-md" width="100%" height="100%" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
