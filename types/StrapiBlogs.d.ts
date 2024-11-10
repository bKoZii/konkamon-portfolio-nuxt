export interface StrapiBlogs {
  id: number
  documentId: string
  title: string
  subtitle: string
  slug: string
  content: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  blogIcon: BlogIcon
  categories: Category[]
}

export interface BlogIcon {
  id: number
  documentId: string
  url: string
}

export interface Category {
  id: number
  documentId: string
  name: string
}
