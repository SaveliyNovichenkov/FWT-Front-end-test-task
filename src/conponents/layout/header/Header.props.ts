import { IAuthor, IFilterForm, ILocation } from 'interfaces/RootInterfaces'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setWordSearch: React.Dispatch<React.SetStateAction<string | undefined>>
  setFindByFilters: React.Dispatch<React.SetStateAction<IFilterForm | null>>
  locations: ILocation[] | undefined
  authors: IAuthor[] | undefined
  setAuthorId: React.Dispatch<React.SetStateAction<number | undefined>>
  setLocationId: React.Dispatch<React.SetStateAction<number | undefined>>
  setSearchByDateTo: React.Dispatch<React.SetStateAction<number | undefined>>
  setSearchByDateFrom: React.Dispatch<React.SetStateAction<number | undefined>>
  changeColorTheme: (theme: 'light' | 'dark') => void
  theme: 'light' | 'dark'
}
