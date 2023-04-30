import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IAuthor, ILocation } from '../../interfaces/RootInterfaces'

export interface SelectProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  selectName: string
  authors?: IAuthor[] | undefined
  locations?: ILocation[] | undefined
  setAuthorId?: React.Dispatch<React.SetStateAction<number | undefined>>
  setLocationId?: React.Dispatch<React.SetStateAction<number | undefined>>
  name?: string
  register?: any
  theme: 'light' | 'dark'
}
