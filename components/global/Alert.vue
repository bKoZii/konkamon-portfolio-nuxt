<template>
  <div>
    <UAlert color="orange" title="ข้อควรระวัง" variant="subtle" icon="ph:warning-duotone" class="not-prose my-3 font-medium tracking-normal">
      <template #description>
        <MDCSlot unwrap="p" />
      </template>
    </UAlert>
  </div>
</template>