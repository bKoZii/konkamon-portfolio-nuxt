<template>
  <div class="flex flex-col gap-5">
    <section class="hidden sm:block">
      <USkeleton class="h-5 w-full" />
      <UDivider class="mt-3" />
    </section>
    <section class="flex flex-col gap-5">
      <USkeleton class="mt-5 h-10 w-full" />
      <USkeleton class="h-5 w-full" />
      <USkeleton class="h-5 w-full" />
      <div class="not-prose flex flex-col flex-nowrap gap-1">
        <USkeleton class="h-5 w-48" />
        <USkeleton class="h-5 w-48" />
      </div>
    </section>
    <USkeleton class="h-96 w-full" />
    <UDivider class="my-4" />
    <USkeleton class="h-12 w-full" />
    <div v-for="a in 5" :key="a">
      <USkeleton class="h-5 w-full" />
    </div>
  </div>
</template>
