import type { Strapi5ResponseMany } from '@nuxtjs/strapi'
import { asSitemapUrl, defineSitemapEventHandler } from '#imports'
import type { StrapiBlogs } from '~/types/StrapiBlogs'

export default defineSitemapEventHandler(async () => {
  const posts = await $fetch<Strapi5ResponseMany<StrapiBlogs>>(`${process.env.STRAPI_URL}/api/blogs?fields[1]=updatedAt&fields[2]=slug`)

  return posts.data.map((post) =>
    asSitemapUrl({
      loc: `blog/${post.slug}`,
      lastmod: post.updatedAt,
    }),
  )
})
