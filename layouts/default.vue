<template>
  <div>
    <div
      class="fixed inset-0 -z-10 h-full w-full bg-slate-200 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:42px_42px] dark:bg-neutral-950"
    ></div>
    <Navbar />
    <UContainer class="flex max-w-[950px] flex-col flex-nowrap gap-2 sm:gap-5" :ui="{padding:'p-0 xs:p-0 sm:p-3'}">
      <main class="rounded-none sm:rounded-lg border bg-white p-3 xs:p-5 md:p-5 drop-shadow-md lg:p-8 dark:border-neutral-800 dark:bg-neutral-900 dark:drop-shadow-none">
        <slot />
      </main>
      <Footer />
    </UContainer>
  </div>
</template>

<script lang="ts" setup></script>
