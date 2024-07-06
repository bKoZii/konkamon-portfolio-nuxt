export type IBlogIndex = Root2[]

export interface Root2 {
  title: string
  author: Author
  mainImage: MainImage
  slug: Slug
  _createdAt: string
  categories?: Category[]
}

export interface Author {
  name: string
}

export interface MainImage {
  _type: string
  asset: Asset
}

export interface Asset {
  _id: string
}

export interface Slug {
  current: string
  _type: string
}

export interface Category {
  title: string
}
