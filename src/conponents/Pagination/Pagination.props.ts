export interface PaginationProps {
  pages: number[]
  currentPage: number
  setPageNumber: React.Dispatch<React.SetStateAction<number>>
  theme: 'light' | 'dark'
}
