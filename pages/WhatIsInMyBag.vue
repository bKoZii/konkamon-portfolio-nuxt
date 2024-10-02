<template>
  <div>
    <PageHeader title="อะไรอยู่ในกระเป๋า?" description="รวม Hardware, Software, อื่นๆ ที่เกี่ยวข้อง ที่ผมใช้งานอยู่ในช่วงนี้" />
    <div class="flex flex-col flex-nowrap gap-12 mt-10">
      <div>
        <UDivider label="Hardware" class="mb-3" />
        <div class="flex flex-col gap-5">
          <div v-for="data in hardwareList" :key="data.name">
            <WhatIsInMyBagItemContainer :data-input="[data]" />
          </div>
        </div>
      </div>
      <div>
        <UDivider label="Software" class="mb-3" />
        <div class="flex flex-col gap-5">
          <div v-for="sData in softwareInfo" :key="sData.name">
            <WhatIsInMyBagItemContainer :data-input="[sData]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type BagItemInterface from '~/types/BagItemInterface'

const hardwareList: BagItemInterface[] = [
  {
    name: 'HP Laptop 15s-eq2xxx',
    description: 'เครื่องทำงานประจำของผม ใช้ทำทุกอย่างตั้งแต่งานเล็กๆ / ฟังเพลง ไปจนถึงงานโปรเจคต่างๆ',
  },
  {
    name: 'Redmi 9A',
    description: 'มือถือ Smartphone ของผม ใช้งานทั่วๆ ไป',
  },
]
const softwareInfo: BagItemInterface[] = [
  {
    name: 'Windows',
    description: 'OS หลัก ใช้ทำงานอื่นๆ ที่ Linux ยังทำแทนได้ยาก / Gaming',
  },
  {
    name: 'CachyOS (Arch Linux)',
    description: 'OS หลักในการ Coding / Project ต่างๆ',
  },
  {
    name: 'VSCode',
    description: 'หนึ่งใน IDE ที่ดีที่สุด ใช้ทำงานทุกๆ งาน',
  },
  {
    name: 'ShareX',
    description: 'Open Source Software จับภาพหน้าจอที่ดีที่สุด มีเครื่องมือหลากหลาย',
  },
  {
    name: 'Bruno',
    description: 'Software ทดสอบ API ที่เบากว่า Postman',
  },
]

useSeoMeta({
  title: 'ในกระเป๋ามีอะไร?',
  ogTitle: '%s - Konkamon Sion',
  description: 'รวม Hardware, Software, อื่นๆ ที่เกี่ยวข้อง ที่ผมใช้งานอยู่ในช่วงนี้',
  ogDescription: 'รวม Hardware, Software, อื่นๆ ที่เกี่ยวข้อง ที่ผมใช้งานอยู่ในช่วงนี้',
  ogImage: '/ogImage-myBag.webp',
  ogUrl: 'https://konkamon.vercel.app/WhatIsInMyBag',
})
</script>
