import { DetailedHTMLProps, HTMLAttributes, SVGProps } from 'react'

export interface PaintItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  img: string
  name: string
  authorId: number
  created: string
  locationId: number
  theme: 'light' | 'dark'
}
