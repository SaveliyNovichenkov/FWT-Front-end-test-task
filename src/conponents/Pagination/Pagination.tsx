import React from 'react'
import { PaginationProps } from './Pagination.props'
import cn from 'classnames'
import styles from './Pagination.module.scss'
import TwoArrowsLeftSvg from '../../assets/TwoArrowsLeftSvg'
import ArrowLeftSvg from '../../assets/ArrowsLeftSvg'

const Pagination = ({ theme, pages, currentPage, setPageNumber }: PaginationProps) => {
  function forwardOne() {
    setPageNumber(prev => prev + 1)
  }
  function forwardToLastPage() {
    setPageNumber(pages[pages.length - 1])
  }
  function backOne() {
    setPageNumber(prev => prev - 1)
  }
  function backToFirstPage() {
    setPageNumber(1)
  }

  return (
    <div className={styles.pages}>
      <button
        onClick={() => backToFirstPage()}
        className={cn(styles.back__btn__two, {
          [styles.dark__back__btn]: theme == 'dark',
          [styles.light__back__btn]: theme == 'light'
        })}
      >
        <TwoArrowsLeftSvg />
      </button>
      <button
        onClick={() => backOne()}
        className={cn(styles.back__btn, {
          [styles.dark__back__btn]: theme == 'dark',
          [styles.light__back__btn]: theme == 'light'
        })}
      >
        <ArrowLeftSvg />
      </button>
      {pages.map((page, index) => (
        <span
          onClick={() => setPageNumber(index + 1)}
          key={index}
          className={cn(styles.page, {
            [styles.dark]: theme == 'dark' && currentPage !== page,
            [styles.light]: theme == 'light' && currentPage !== page,
            [styles.currentPageLight]: currentPage == page && theme == 'dark',
            [styles.currentPageDark]: currentPage == page && theme == 'light'
          })}
        >
          {page}
        </span>
      ))}
      <button
        onClick={() => forwardOne()}
        className={cn(styles.forward__btn, {
          [styles.forward__dark]: theme == 'dark',
          [styles.forward__light]: theme == 'light'
        })}
      >
        <ArrowLeftSvg />
      </button>
      <button
        className={cn(styles.forward__btn__two, {
          [styles.forward__dark]: theme == 'dark',
          [styles.forward__light]: theme == 'light'
        })}
        onClick={() => forwardToLastPage()}
      >
        <TwoArrowsLeftSvg />
      </button>
    </div>
  )
}

export default Pagination
