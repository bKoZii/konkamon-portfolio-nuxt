<template>
  <UCard class="h-fit">
    <div class="flex w-full flex-row items-center gap-5">
      <USkeleton class="size-20" />
      <div class="flex w-full flex-col items-start gap-2">
        <USkeleton class="h-5 w-full" />
        <USkeleton class="h-4 w-full" />
        <USkeleton class="h-4 w-1/3" />
        <section class="flex flex-row gap-2">
          <USkeleton class="h-5 w-10" />
          <USkeleton class="h-5 w-10" />
        </section>
        <USkeleton class="h-6 w-20" />
      </div>
    </div>
  </UCard>
</template>
