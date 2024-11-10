<template>
  <div>
    <div class="fixed place-items-center w-full min-h-screen -z-10">
      <div class="relative -z-10 h-screen w-screen">
        <ParticleBackground color="#379777" />
        <ParticlesBg
          class="absolute inset-0"
          :quantity="700"
          :ease="100"
          :color=" $colorMode.value == 'dark' ? '#6BC9AA' : '#379777'"
          :staticity="30"
          refresh
        />
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
