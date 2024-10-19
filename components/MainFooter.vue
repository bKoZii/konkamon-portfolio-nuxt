<template>
  <footer
    class="flex flex-col flex-nowrap items-center justify-between gap-5 rounded-none border-t md:border bg-white px-8 py-4  text-gray-600 dark:text-gray-300 drop-shadow-md sm:flex-row sm:rounded-lg dark:border-neutral-800 dark:bg-neutral-950 dark:drop-shadow-none"
  >
    <div class="flex flex-col items-center text-sm sm:items-start">
      <span>© 2024 {{ $t('home.hero.myName') }}</span>
      <span>{{ $t('home.footer.copyrightText') }}</span>
    </div>
    <div class="flex flex-row gap-5">
      <UTooltip text="Source Code" :popper="{ placement: 'top' }">
        <a
          ref="noopener noreferrer"
          href="https://github.com/bKoZii/konkamon-portfolio-nuxt"
          target="_blank"
          aria-label="Go to GitHub Repo Page"
        >
          <div class="hover:text-black active:scale-95 dark:hover:text-white">
            <Icon
              name="ph:github-logo-duotone"
              size="28px"
              mode="svg"
            />
          </div>
        </a>
      </UTooltip>
    </div>
  </footer>
</template>
