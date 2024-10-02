<template>
  <div>
    <MainNavbar />
    <UContainer class="flex max-w-[1000px] flex-col flex-nowrap gap-2 sm:gap-5" :ui="{ padding: 'p-0 xs:p-0 sm:p-3' }">
      <main class="px-3 my-5  md:p-0">
        <slot />
      </main>
      <MainFooter />
    </UContainer>
  </div>
</template>
