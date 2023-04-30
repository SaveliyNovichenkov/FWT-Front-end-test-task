import { DetailedHTMLProps, FormHTMLAttributes, ReactNode } from 'react'

export interface FormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  defaultValues?: { [x: string]: any } | undefined
  children: ReactNode
  onSubmit: (data: { [x: string]: any }) => void
}
