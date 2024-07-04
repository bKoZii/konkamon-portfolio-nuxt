export type IBlog = Root2[]

export interface Root2 {
  slug: Slug
  _rev: string
  _updatedAt: string
  title: string
  _id: string
  _type: string
  body: Body[]
  author: Author
  _createdAt: string
  mainImage?: MainImage
  introText: string
  categories?: Category[]
}

export interface Slug {
  current: string
  _type: string
}

export interface Body {
  markDefs: any[]
  children: Children[]
  _type: string
  style: string
  _key: string
}

export interface MainImage {
  _type: string
  asset: Asset
}

export interface Asset {
  _ref: string
  _type: string
}

export interface Children {
  _key: string
  _type: string
  marks: string[]
  text: string
}

export interface Author {
  _ref: string
  _type: string
}

export interface Category {
  _type: string
  _key: string
  _ref: string
}
