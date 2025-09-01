export interface Country {
    name: string;
  unicodeFlag: string;
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