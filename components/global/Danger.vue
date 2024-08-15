<template>
  <div>
    <UAlert color="red" title="คำเตือน" variant="subtle" icon="ph:warning-duotone" class="font-medium tracking-normal not-prose my-3">
      <template #description>
        <MDCSlot unwrap="p" />
      </template>
    </UAlert>
  </div>
</template>