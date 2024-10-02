<template>
  <UCard class="h-fit">
    <div class="flex items-center w-full flex-row gap-5">
      <USkeleton class="size-20" />
      <div class="flex flex-col gap-2 items-start w-full">
        <USkeleton class="h-5 w-full" />
        <USkeleton class="h-4 w-full" />
        <USkeleton class="h-4 w-1/3" />
        <section class="flex flex-row gap-2">
          <USkeleton class="w-10 h-5" />
          <USkeleton class="w-10 h-5" />
        </section>
        <USkeleton class="h-6 w-20" />
      </div>
    </div>
  </UCard>
</template>
