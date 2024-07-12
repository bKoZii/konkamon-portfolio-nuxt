<template>
  <div>
    <PageHeader title="Bookmarks" description="รวมเว็บไซต์แนว IT, Linux, Tutorials และเว็บไซต์ที่อื่นๆ ที่น่าสนใจ" />
    <div class="mt-6 flex flex-col flex-nowrap gap-3">
      <div
        v-for="data in bookmarkItem"
        :key="data.name"
        class="rounded-lg text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-700 hover:shadow dark:hover:bg-neutral-800 hover:dark:text-gray-200"
      >
        <BookmarkItem :web-item="data" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type BookmarkItemsInterface from '~/types/BookmarkItemsInterface'

const bookmarkItem: BookmarkItemsInterface[] = [
  {
    name: 'IT Tools - Handy Tools for Developers',
    url: 'https://it-tools.tech',
    description: 'เว็บไซต์รวมเครื่องมือต่างๆ สำหรับชาว IT ไว้ประมาณ 80 เครื่องมือ'
  },
  {
    name: 'Transform - a Web Coverter',
    url: 'https://transform.tools',
    description: 'รวมเครื่องมือแปลง Code ต่างๆ สำหรับสาย Coding'
  },
  {
    name: 'HTML Emmet Cheat Sheet',
    url: 'https://docs.emmet.io/cheat-sheet',
    description: 'Cheat Sheet สำหรับ HTML Emmet ช่วยให้พิมพ์ HTML ได้เร็วขึ้น'
  },
  {
    name: 'BezKoder - Mobile & Web App Development Tutorial',
    url: 'https://www.bezkoder.com',
    description: 'รวม Tutorial การพัฒนา Mobile App และ Web App ด้วย Framework ต่างๆ'
  },
  {
    name: '60 Essential Linux Commands + Cheat Sheet',
    url: 'https://www.hostinger.com/tutorials/linux-commands',
    description: 'รวม Linux Command ที่ใช้บ่อยที่สุด พร้อม Cheat Sheet'
  },
  {
    name: 'Finisher - Free Animated Headers ',
    url: 'https://www.finisher.co/lab/header',
    description: 'สร้าง Animated Header ได้ง่ายๆ ปรับแต่งได้หลากหลาย'
  },
  {
    name: 'Developer Roadmaps',
    url: 'https://roadmap.sh',
    description: 'รวม Roadmap สายงาน Developer ต่างๆ'
  },
  {
    name: 'Color Hunt - Color Palettes for Designers and Artists',
    url: 'https://colorhunt.co',
    description: 'รวม Color Palettes ไว้มากมาย หลากหลายโทนสี'
  },
  {
    name: 'Monkeytype',
    url: 'https://monkeytype.com/',
    description: 'วัดความเร็วในการพิมพ์ มีลูกเล่นมากมาย Customize ได้หลากหลาย'
  }
]
useSeoMeta({
  title: 'Bookmarks',
  ogTitle: 'Bookmarks',
  description: 'รวมเว็บไซต์แนว IT, Linux, Tutorials และเว็บไซต์ที่อื่นๆ ที่น่าสนใจ',
  ogDescription: 'รวมเว็บไซต์แนว IT, Linux, Tutorials และเว็บไซต์ที่อื่นๆ ที่น่าสนใจ',
  ogImage: '/ogImage-bookmarks.webp',
  titleTemplate: '%s - Konkamon Sion',
})
</script>

<style></style>
