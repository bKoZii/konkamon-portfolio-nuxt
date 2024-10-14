<template>
  <div>
    <div class="flex flex-col gap-5 rounded-lg text-black dark:text-white">
      <div
        v-for="work in workList"
        :key="work.name"
        class="flex items-end justify-between space-x-2"
      >
        <ProjectListItem :work-data="work" />
      </div>
      <div class="flex justify-center">
        <UButton
          to="/Projects"
          label="All Projects"
          variant="ghost"
          icon="ph:arrow-right-light"
          trailing
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type workListInterface from '~/types/workListInterface'

const workList: workListInterface[] = [
  {
    name: 'Ionic + Angular - Firebase CRUD ',
    description: 'ชิ้นงาน Ionic ประจำรายวิชา การพัฒนาคลาวด์แอปพลิเคชัน',
    icon: 'ph:device-mobile-camera-fill',
    link: 'https://github.com/bKoZii/cloud-konkamon-ionic-angular',
  },

  {
    name: 'Ionic + Vue - Firebase CRUD',
    description: 'ชิ้นงาน Ionic ประจำรายวิชา การพัฒนาคลาวด์แอปพลิเคชัน',
    icon: 'ph:device-mobile-camera-fill',
    link: 'https://github.com/bKoZii/cloud-konkamon-ionic-vue',
  },
  {
    name: 'Dashboard from Mock Up',
    description: 'ฝึกการสร้าง Dashboard ด้วย Vue / Quasar โดยลอกจากงาน Design',
    icon: 'ic:round-space-dashboard',
  },
]
</script>
