<template>
  <main>
    <Navbar class="print:hidden" />
    <div class="bg-primary-600 dark:bg-primary-800 p-2 text-center text-white print:hidden">
      <p>
        Printer-friendly standard résumé, any HTML tags with
        <code class="rounded bg-neutral-900 p-1 text-sm">print:hidden</code> class will be hidden on print. Press Ctrl+P to print
      </p>
    </div>
    <div class="container mx-auto max-w-screen-xl xl:mx-auto">
      <slot />
    </div>
  </main>
</template>

<script lang="ts" setup></script>

<style></style>
