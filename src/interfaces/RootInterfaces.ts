export interface IPaint {
  authorId: number
  created: string
  id: number
  imageUrl: string
  locationId: number
  name: string
}

export interface IPaintQueryParams {
  id?: number
  q?: string
  _page?: number
  _limit?: number
  authorId?: number
  locationId?: number
  created_gte?: number
  created_lte?: number
}

export interface IAuthor {
  id: number
  name: string
}

export interface ILocation {
  id: number
  location: string
}

export interface IFilterForm {
  q: string
  authorId: number
  locationId: number
  created_gte: number
  created_lte: number
}
