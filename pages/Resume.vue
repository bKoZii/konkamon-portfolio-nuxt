<template>
  <article class="flex max-w-none flex-col gap-8 print:text-xs">
    <section class="flex flex-col flex-nowrap items-center justify-between py-3 xs:flex-col lg:flex-row print:flex-row print:p-0">
      <div class="prose flex flex-1 flex-col text-center text-sm dark:prose-invert sm:text-left print:text-left print:text-xs">
        <a href="mailto:konkamon.work@gmail.com">konkamon.work@gmail.com</a>
        <span>Nakhon Si Thammarat, Thailand</span>
      </div>
      <div
        class="order-first flex-none p-4 text-center text-4xl font-bold sm:order-none sm:text-2xl md:text-3xl lg:text-6xl print:order-none print:pt-0 print:text-3xl"
      >
        Konkamon Sion
        <span class="-mt-1 block text-base lg:text-lg">( Big )</span>
      </div>
      <div class="prose flex flex-1 flex-col text-center text-sm dark:prose-invert sm:py-4 sm:text-right print:text-right print:text-xs">
        <a
          href="https://github.com/bKoZii"
          target="_blank"
          rel="noopener noreferrer"
        >github.com/bKoZii</a>
        <a href="https://konkamon-nuxt.web.app" target="_blank">konkamon-nuxt.web.app</a>
      </div>
    </section>
    <section>
      <div class="border-primary border-b">
        <h2 class="text-base font-bold uppercase sm:text-xl print:text-xs">
          Technologies / Languages
        </h2>
      </div>
      <div>
        <ul
          v-for="(item, index) in resumeData"
          :key="index"
          class="ml-5 list-inside list-disc text-sm sm:text-base print:text-xs"
        >
          <li v-for="(data, idx) in item.technology" :key="idx">
            <span class="inline-block w-28 pr-1 font-semibold">{{ data.heading }}: </span>
            {{ data.detail }}
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div class="border-primary border-b">
        <h2 class="text-base font-bold uppercase sm:text-xl print:text-xs">
          Educations
        </h2>
      </div>
      <div>
        <ul
          v-for="(item, index) in resumeData"
          :key="index"
          class="ml-5 list-inside list-disc sm:text-base print:text-xs"
        >
          <li v-for="(data, idx) in item.education" :key="idx">
            <span class="pr-1 font-semibold">{{ data.heading }}, </span>
            {{ data.detail }}
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div class="border-primary border-b">
        <h2 class="text-base font-bold uppercase sm:text-xl print:text-xs">
          Work Experience
        </h2>
      </div>
      <section>
        <div class="flex flex-col justify-between text-sm font-bold sm:flex-row sm:text-base print:text-xs">
          <span>Internship - Frond-end Developer, Tester</span><span>Siam IT Networking (Thailand) Co., Ltd.</span>
          <span>7 May 2024 - 21 June 2024</span>
        </div>
        <div>
          <ul class="ml-5 list-inside list-disc">
            <li>Tested Admin System, User/Rider/Merchant App</li>
            <li>Create a Dashboard webpage based on Dribble designs.</li>
          </ul>
        </div>
      </section>
    </section>
    <section>
      <div class="border-primary border-b">
        <h2 class="text-base font-bold uppercase sm:text-xl print:text-xs">
          Projects
        </h2>
      </div>
      <div>
        <ul
          v-for="(item, index) in resumeData"
          :key="index"
          class="ml-5 list-inside list-disc sm:text-base print:text-xs"
        >
          <li v-for="(data, idx) in item.project" :key="idx">
            <span class="pr-1 font-semibold">{{ data.title }}, </span>
            {{ data.detail }}
            <a
              :href="data.url"
              target="_blank"
              rel="noopener noreferrer"
            ><span class="font-semibold underline">{{ removeHttps(data.url) }}</span></a>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script lang="ts" setup>
interface Resume {
  technology: headingAndDetail[]
  education: headingAndDetail[]
  project: projects[]
}

interface headingAndDetail {
  heading: string
  detail: string
}
interface projects {
  title: string
  detail: string
  url: string
}
definePageMeta({
  layout: 'resume',
})

const resumeData: Resume[] = [
  {
    education: [
      {
        heading: 'Infomation Technology',
        detail: 'Nakhon Si Thammarat Vocational College, 2018-2020 (GPA 3.75) ',
      },
      {
        heading: 'Digital Business Technology',
        detail: 'Nakhon Si Thammarat Vocational College, 2021-2023 (GPA 3.38) ',
      },
      {
        heading: 'Infomation Technology',
        detail: 'Rajamangala University of Technology Srivijaya, 2023-Current (GPA 3.85) ',
      },
    ],
    project: [
      {
        title: 'Dashboard from Mock Up',
        detail: 'Create a Dashboard webpage based on Dribble designs',
        url: 'https://vue-quasar-dashboard.web.app',
      },
      {
        title: 'Portfolio Website',
        detail: ' My Portfolio Website, Built with Nuxt, Nuxt UI',
        url: 'https://konkamon-nuxt.web.app',
      },
    ],
    technology: [
      { heading: 'Languages', detail: 'Javascript, TypeScript, Python, HTML, CSS' },
      { heading: 'Framworks', detail: 'Vue, Nuxt, Angular, TailwindCSS, Bootstrap, Ionic' },
      { heading: 'Tools / Others', detail: 'VSCode, Git, Linux, Firebase' },
    ],
  },
]
useSeoMeta({
  title: 'Resume',
  ogTitle: '%s - Konkamon Sion',
  description: 'Resume ของนาย กรกมล ศรีอ่อน',
  ogDescription: 'Resume ของนาย กรกมล ศรีอ่อน',
  ogImage: '/ogImage-resume.webp',
  ogUrl: 'https://konkamon.vercel.app/Resume',
})

function removeHttps(url: string) {
  return url.replace('https://', '')
}
</script>
