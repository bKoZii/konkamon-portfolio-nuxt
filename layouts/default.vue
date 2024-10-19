<template>
  <div>
    <div class="fixed place-items-center w-full min-h-screen -z-10">
      <div class="relative h-[400px]">
        <Particles class="absolute top-0" color="#379777" />
        <ParticleBackground color="#379777" />
      </div>
    </div>
    <MainNavbar />
    <UContainer class="flex max-w-[1000px] flex-col flex-nowrap gap-2 sm:gap-5" :ui="{ padding: 'p-0 xs:p-0 sm:p-3' }">
      <main class="px-3 my-5  md:p-0">
        <slot />
      </main>
      <MainFooter />
    </UContainer>
  </div>
</template>
