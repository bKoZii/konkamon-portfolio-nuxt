<template>
  <div>
    <article class="prose dark:prose-invert">
      <h2>Bookmarks</h2>
      <p>รวมเว็บไซต์แนว IT, Linux, Tutorials และเว็บไซต์ที่อื่นๆ ที่น่าสนใจ</p>
    </article>
    <div class="flex flex-col flex-nowrap gap-3 mt-6">
      <div
        v-for="data in bookmarkItem"
        :key="data.name"
        class="hover:bg-gray-200 dark:hover:bg-neutral-800 rounded-lg hover:shadow-md transition-all"
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
  title: 'Bookmarks - Konkamon Sion'
})
</script>

<style></style>
