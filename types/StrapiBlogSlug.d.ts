export interface StrapiBlogSlug {
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
  categories: Category[]
  mainImage: MainImage
}

export interface Category {
  id: number
  documentId: string
  name: string
}

export interface MainImage {
  id: number
  documentId: string
  url: string
}
