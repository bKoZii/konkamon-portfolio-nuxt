<template>
  <div
    class="inset-0 h-full min-h-dvh w-full bg-slate-200 dark:bg-neutral-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:42px_42px]"
  >
    <!-- <div class="dark:bg-neutral-900 min-h-dvh"> -->
    <div class="container mx-auto max-w-[800px] py-5">
      <Navbar />
      <main class="my-8 bg-white dark:bg-neutral-900 p-8 border rounded-lg dark:border-neutral-800 drop-shadow-md dark:drop-shadow-none">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
