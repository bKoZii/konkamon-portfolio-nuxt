export interface Root {
  data: Daum[]
  meta: Meta
}

export interface Daum {
  id: number
  attributes: Attributes2
}

/**
 * Represents a blog entry in Strapi.
 *
 * @interface StrapiBlogs
 * @property {string} title - The title of the blog.
 * @property {string} subtitle - The subtitle of the blog.
 * @property {string} publishedAt - The publication date of the blog.
 * @property {string} slug - The URL-friendly identifier for the blog.
 * @property {MainImage} mainImage - The main image associated with the blog.
 * @property {Categories} categories - The categories to which the blog belongs.
 * @property {BlogIcon} blogIcon - The icon representing the blog.
 * @property {CreatedBy} createdBy - Information about the creator of the blog.
 */
export interface StrapiBlogs {
  title: string
  subtitle: string
  publishedAt: string
  slug: string
  mainImage: MainImage
  categories: Categories
  blogIcon: BlogIcon
  createdBy: CreatedBy
}

export interface MainImage {
  data: Data
}

export interface Data {
  id: number
  attributes: Attributes2
}

export interface Attributes2 {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string
  provider: string
  provider_metadata: string
  createdAt: string
  updatedAt: string
}

export interface Formats {
  large: Large
  small: Small
  medium: Medium
  thumbnail: Thumbnail
}

export interface Large {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface Small {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface Medium {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface Thumbnail {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface Categories {
  data: Daum2[]
}

export interface Daum2 {
  id: number
  attributes: Attributes3
}

export interface Attributes3 {
  name: string
}

export interface BlogIcon {
  data: Data2
}

export interface Data2 {
  id: number
  attributes: Attributes4
}

export interface Attributes4 {
  url: string
}

export interface CreatedBy {
  id: number
  firstname: string
  lastname: string
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
