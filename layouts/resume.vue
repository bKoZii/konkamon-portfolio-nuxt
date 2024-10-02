<template>
  <main>
    <Navbar class="print:hidden" />
    <div class="bg-primary-600 dark:bg-primary-800 p-2 text-center text-sm text-white sm:text-base print:hidden">
      <p>
        Printer-friendly standard résumé, any HTML tags with
        <code class="rounded bg-neutral-900 p-1 text-sm">print:hidden</code> class will be hidden on print. Press Ctrl+P to print
      </p>
    </div>
    <div class="container mx-auto max-w-screen-xl px-3 sm:px-0 xl:mx-auto print:px-0">
      <slot />
    </div>
  </main>
</template>
