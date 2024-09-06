<template>
  <div>
    <h2 class="text-lg font-bold text-gray-500 dark:text-gray-400 mb-6">Contact Me</h2>

    <div class="relative mb-4">
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        class="w-full bg-white rounded border drop-shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <div class="relative">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <Icon name="mdi:email" />
        </button>
      </span>
      <input
        type="search"
        name="q"
        class="py-2 text-sm border shadow rounded unded-md pl-10 focus:outline-none"
        placeholder="Search..."
        autocomplete="off"
      />
    </div>
    <div class="w-2/3 flex justify-end items-center relative">
      <input placeholder="Pesquisar" class="border rounded p-1 w-full" />
      <!-- <img src="/icons/search.svg" class="absolute mr-2 w-10" alt="Search Icon" /> -->
      <Icon name="mdi:email" class="absolute mr-2 w-10" />
    </div>
  </div>
</template>