export interface IBlog {
  mainImage: MainImage
  body: Body[]
  categories: Category[]
  title: string
  author: Author
  _createdAt: string
  _updatedAt: string
}

export interface MainImage {
  _type: string
  asset: Asset
}

export interface Asset {
  _type: string
  _ref: string
}

export interface Body {
  markDefs: any[]
  children: Children[]
  _type: string
  style: string
  _key: string
  listItem?: string
  level?: number
}

export interface Children {
  _type: string
  marks: string[]
  text: string
  _key: string
}

export interface Category {
  title: string
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