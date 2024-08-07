export interface Root {
  data: Daum[]
  meta: Meta
}

export interface Daum {
  id: number
  attributes: Attributes2
}

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
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
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
  path: any
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
  path: any
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
  path: any
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
  path: any
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
