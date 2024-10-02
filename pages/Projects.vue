<template>
  <div>
    <div class="flex flex-col flex-nowrap gap-10">
      <PageHeader
        title="Projects"
        description="รวมโปรเจค / ชิ้นงาน ต่างๆ ผมเป็นคนที่ชอบทำงาน / โปรเจคอะไรเล็กๆ น้อยๆ โดย List ต่อไปนี้จะเลือกเฉพาะงานที่พอจะนำมาเสนอได้"
      />
      <section class="flex flex-col gap-3 space-y-3 rounded-lg text-black dark:text-white">
        <div
          v-for="work in workList"
          :key="work.name"
          class="flex items-end justify-between space-x-2"
        >
          <ProjectListItem :work-data="work" />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type workListInterface from '~/types/workListInterface'

const workList: workListInterface[] = [
  {
    name: 'Ionic + Angular - Firebase CRUD ',
    description: 'ชิ้นงาน Ionic ประจำรายวิชา การพัฒนาคลาวด์แอปพลิเคชัน',
    icon: 'ph:device-mobile-camera-duotone',
    link: 'https://github.com/bKoZii/cloud-konkamon-ionic-angular',
  },

  {
    name: 'Ionic + Vue - Firebase CRUD',
    description: 'ชิ้นงาน Ionic ประจำรายวิชา การพัฒนาคลาวด์แอปพลิเคชัน',
    icon: 'ph:device-mobile-camera-duotone',
    link: 'https://github.com/bKoZii/cloud-konkamon-ionic-vue',
  },
  {
    name: 'Dashboard from Mock Up',
    description: 'ฝึกการสร้าง Dashboard โดยลอกจากงาน Design ด้วย Vue / Quasar',
    icon: 'ic:twotone-dashboard',
  },
  {
    name: 'Angular Website',
    description: 'Angular + Bootstrap - ชิ้นงานประจำรายวิชา การพัฒนาคลาวด์แอปพลิเคชัน',
    icon: 'ph:globe-simple-duotone',
    link: 'https://github.com/bKoZii/cloud-konkamon-bootstrap',
  },
  {
    name: 'Vue + Vuetify - Firestore CRUD',
    description: 'ศึกษาการใช้งาน Vuetify ในการสร้างแอพ CRUD',
    icon: 'simple-icons:vuetify',
    link: 'https://github.com/bKoZii/vuetify-firestore-crud',
  },
]

useSeoMeta({
  title: 'รวมโปรเจค',
  ogTitle: '%s - Konkamon Sion',
  description: 'รวมโปรเจค / ชิ้นงาน ต่างๆ ผมเป็นคนที่ชอบทำงาน / โปรเจคอะไรเล็กๆ น้อยๆ โดย List ต่อไปนี้จะเลือกเฉพาะงานที่พอจะนำมาเสนอได้',
  ogDescription: 'รวมโปรเจค / ชิ้นงาน ต่างๆ ผมเป็นคนที่ชอบทำงาน / โปรเจคอะไรเล็กๆ น้อยๆ โดย List ต่อไปนี้จะเลือกเฉพาะงานที่พอจะนำมาเสนอได้',
  ogImage: '/ogImage-projects.webp',
  ogUrl: 'https://konkamon.vercel.app/Projects',
})
</script>
