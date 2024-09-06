export interface StrapiBlogSlug {
  title: string
  subtitle: string
  publishedAt: string
  updatedAt: string
  slug: string
  content: string
  mainImage: MainImage
  createdBy: CreatedBy
  categories: Categories
}

export interface MainImage {
  data: Data
}

export interface Data {
  id: number
  attributes: Attributes
}

export interface Attributes {
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
  folderPath: string
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

export interface CreatedBy {
  data: Data2
}

export interface Data2 {
  id: number
  attributes: Attributes2
}

export interface Attributes2 {
  firstname: string
  lastname: string
  username: string
  email: string
  password: string
  resetPasswordToken: string
  registrationToken: string
  isActive: boolean
  blocked: boolean
  preferedLanguage: string
  createdAt: string
  updatedAt: string
}

export interface Categories {
  data: Daum[]
}

export interface Daum {
  id: number
  attributes: Attributes3
}

export interface Attributes3 {
  name: string
}
