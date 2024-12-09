<template>
  <div>
    <div class="absolute top-0 -z-10 h-fit w-full">
      <ParticleBackground color="#379777" />
    </div>
    <div class="fixed -z-10 min-h-screen w-full place-items-center">
      <div class="relative h-screen w-screen">
        <SparkleBackground
          background="transparent"
          :min-size="0.6"
          :max-size="1.2"
          :speed="0.7"
          :particle-density="400"
          class="absolute top-0 size-full"
          :particle-color="$colorMode.value == 'dark' ? '#6BC9AA' : '#379777'" />
      </div>
    </div>
    <MainNavbar />
    <UContainer
      class="flex max-w-[1000px] flex-col flex-nowrap gap-2 sm:gap-5"
      :ui="{ padding: 'xs:p-0 p-0 sm:p-3' }">
      <main class="my-5 px-3 md:p-0">
        <slot />
      </main>
      <MainFooter />
    </UContainer>
  </div>
</template>
