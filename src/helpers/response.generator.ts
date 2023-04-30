import { IAuthor, ILocation, IPaint } from '../interfaces/RootInterfaces'

export interface PaintsResponse {
  config?: any
  data: IPaint[]
  headers?: any
  request?: any
  status?: number
  statusText?: string
}

export interface AuthorsResponse {
  config?: any
  data: IAuthor[]
  headers?: any
  request?: any
  status?: number
  statusText?: string
}

export interface LocationsResponse {
  config?: any
  data: ILocation[]
  headers?: any
  request?: any
  status?: number
  statusText?: string
}
