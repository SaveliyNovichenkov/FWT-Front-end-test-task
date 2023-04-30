import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface FormToInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  setSearchByDateTo: React.Dispatch<React.SetStateAction<number | undefined>>
  setSearchByDateFrom: React.Dispatch<React.SetStateAction<number | undefined>>
  registerOne?: any
  registerTwo?: any
  nameFrom?: string
  nameTo?: string
  theme: 'light' | 'dark'
}
