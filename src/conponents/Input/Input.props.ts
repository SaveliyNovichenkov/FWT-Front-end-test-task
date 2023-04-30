import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: FieldError
  register?: any
  theme: 'light' | 'dark'
  setWordSearch: React.Dispatch<React.SetStateAction<string | undefined>>
}
