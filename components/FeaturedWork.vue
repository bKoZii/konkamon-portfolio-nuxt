<template>
  <div>
    <div>
      <h2 class="text-lg font-bold text-gray-500 mb-6">Featured Work</h2>
    </div>
    <div class="flex flex-col space-y-3 text-black dark:text-white rounded-lg gap-3">
      <div v-for="work in workList" :key="work.name" class="flex items-end justify-between space-x-2">
        <ProjectListItem :work-data="work" />
      </div>
      <div class="flex justify-center py-3">
        <nuxt-link to="/Projects" class="flex items-center gap-2 text-primary ring-primary px-5 py-1 rounded hover:underline">
          All Project
          <Icon name="ph:arrow-right-light" size="20px" />
        </nuxt-link>
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
    link: 'https://github.com/bKoZii/cloud-konkamon-ionic-angular'
  },

  {
    name: 'Ionic + Vue - Firebase CRUD',
    description: 'ชิ้นงาน Ionic ประจำรายวิชา การพัฒนาคลาวด์แอปพลิเคชัน',
    icon: 'ph:device-mobile-camera-fill',
    link: 'https://github.com/bKoZii/cloud-konkamon-ionic-vue'
  },
  {
    name: 'Dashboard from Mock Up',
    description: 'ฝึกการสร้าง Dashboard ด้วย Vue / Quasar โดยลอกจากงาน Design',
    icon: 'ic:round-space-dashboard'
  }
]
</script>

<style></style>
