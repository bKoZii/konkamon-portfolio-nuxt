export type IBlogIndex = Root2[]

export interface Root2 {
  title: string
  author: Author
  mainImage: MainImage
  introText: string
  slug: Slug
  _createdAt: string
  categories?: Category[]
}

export interface Author {
  image: Image
  name: string
}

export interface Image {
  asset: Asset
}

export interface Asset {
  url: string
}

export interface MainImage {
  _type: string
  asset: Asset
}

export interface Asset {
  url: string
  _ref: string
}

export interface Slug {
  current: string
  _type: string
}

export interface Category {
  title: string
}
