<template>
  <div>
    <div class="flex min-w-0 flex-col items-start rounded-lg border p-2 sm:flex-row sm:items-center sm:gap-3 dark:border-neutral-800">
      <span class="relative hidden h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-gray-800 sm:inline-flex dark:text-gray-400">
        <Icon
          name="ph:globe-duotone"
          mode="svg"
          size="30px"
        />
      </span>
      <div class="flex flex-col">
        <USkeleton class="mb-2 h-5 w-40" />
        <USkeleton class="h-3 w-72" />
      </div>
      <span class="flex-1" /><span class="text-sm text-gray-800 sm:block dark:text-gray-400"><USkeleton class="h-3 w-20" /></span>
    </div>
  </div>
</template>
