<template>
  <div>
    <div
      class="fixed inset-0 -z-10 h-full w-full bg-slate-200 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:42px_42px] dark:bg-black"
    ></div>
    <div class="fixed inset-0 -z-[9] mx-28 hidden h-screen items-center justify-center lg:flex">
      <div
        class="from-primary via-background h-[500px] w-full rounded-full bg-gradient-to-r to-blue-500 opacity-20 blur-[150px] dark:to-blue-600 dark:opacity-15"
      ></div>
    </div>
    <Navbar />
    <UContainer class="flex max-w-[1000px] flex-col flex-nowrap gap-2 sm:gap-5" :ui="{ padding: 'p-0 xs:p-0 sm:p-3' }">
      <main
        class="rounded-none border bg-white p-3 drop-shadow-md xs:p-5 sm:rounded-lg md:p-5 lg:p-8 dark:border-neutral-800 dark:bg-neutral-950 dark:drop-shadow-none"
      >
        <slot />
      </main>
      <Footer />
    </UContainer>
  </div>
</template>