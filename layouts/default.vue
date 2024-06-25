<template>
  <div
    class="fixed inset-0 h-full w-full bg-slate-200 dark:bg-neutral-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:42px_42px]"
  ></div>

  <!-- <div class="dark:bg-neutral-900 min-h-dvh"> -->
  <!-- <div class="container mx-auto max-w-[800px] py-5"> -->
  <UContainer class="max-w-[850px] py-5 flex flex-col gap-5 flex-nowrap">
    <Navbar />
    <main class="bg-white dark:bg-neutral-900 p-3 lg:p-8 border rounded-lg dark:border-neutral-800 drop-shadow-md dark:drop-shadow-none">
      <slot />
    </main>
    <Footer />
  </UContainer>
  <!-- </div> -->
  <!-- </div> -->
</template>

<script lang="ts" setup></script>
