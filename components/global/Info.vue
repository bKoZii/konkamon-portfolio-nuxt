<template>
  <div>
    <UAlert
      color="primary"
      title="ข้อควรรู้"
      variant="subtle"
      icon="ph:info-duotone"
      :ui="{ title: 'font-bold', wrapper: 'not-prose', description: 'leading-6' }"
    >
      <template #description>
        <MDCSlot unwrap="p" />
      </template>
    </UAlert>
  </div>
</template>
