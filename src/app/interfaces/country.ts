export interface Country {
  error: boolean
  msg: string
  data: Daum[]
}

export interface Daum {
  name: string
  iso2: string
  iso3: string
  unicodeFlag: string
}