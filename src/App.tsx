import React, { useEffect, useState } from 'react'
import { useFetchAllAuthorsQuery } from 'services/author.service'
import { useFetchAllLocationsQuery } from 'services/location.service'
import './App.scss'
import { Header } from './conponents/layout/header/Header'
import PaintItem from './conponents/PaintItem/PaintItem'
import { IFilterForm } from './interfaces/RootInterfaces'
import { useFetchPaintsWithParamsQuery } from './services/paints.service'
import cn from 'classnames'
import styles from './conponents/Select/Select.module.scss'
import { useTypedDispatch, useTypedSelector } from './hooks/redux'
import { themeSlice } from './store/reducers/themeSlice'
import Pagination from './conponents/Pagination/Pagination'

function App() {
  let [pageNumber, setPageNumber] = useState<number>(1)
  let [currentPage, setCurrentPage] = useState<number>(1)
  let [totalPage, setTotalPage] = useState<number | undefined>(undefined)
  let [paintId, setPaintId] = useState<number | undefined>(undefined)
  let [authorId, setAuthorId] = useState<number | undefined>(undefined)
  let [locationId, setLocationId] = useState<number | undefined>(undefined)
  let [wordSearch, setWordSearch] = useState<string | undefined>(undefined)
  let [searchByDateFrom, setSearchByDateFrom] = useState<number | undefined>(undefined)
  let [searchByDateTo, setSearchByDateTo] = useState<number | undefined>(undefined)
  let [findByFilters, setFindByFilters] = useState<IFilterForm | null>(null)
  const { theme } = useTypedSelector(state => state.theme)
  const { changeTheme } = themeSlice.actions
  const dispatch = useTypedDispatch()

  const pages = [1, 2, 3]

  const changeColorTheme = (theme: 'light' | 'dark') => {
    switch (theme) {
      case 'dark': {
        dispatch(changeTheme('light'))
        return
      }
      case 'light':
        {
          dispatch(changeTheme('dark'))
          return
        }
        return
    }
  }

  const {
    data: paints,
    isLoading,
    isError,
    error
  } = useFetchPaintsWithParamsQuery({
    _limit: 12,
    q: wordSearch,
    _page: pageNumber,
    id: paintId,
    authorId: authorId,
    locationId: locationId,
    created_gte: searchByDateFrom,
    created_lte: searchByDateTo
  })
  const { data: locations } = useFetchAllLocationsQuery('')
  const { data: authors } = useFetchAllAuthorsQuery('')

  return (
    <div
      className={cn('layout', {
        ['dark']: theme == 'dark',
        ['light']: theme == 'light'
      })}
    >
      <Header
        setWordSearch={setWordSearch}
        theme={theme}
        changeColorTheme={changeColorTheme}
        setSearchByDateFrom={setSearchByDateFrom}
        setSearchByDateTo={setSearchByDateTo}
        setAuthorId={setAuthorId}
        setLocationId={setLocationId}
        locations={locations}
        authors={authors}
        setFindByFilters={setFindByFilters}
      />
      <div className='main'>
        {paints &&
          paints.map(item => (
            <PaintItem
              theme={theme}
              key={item.id}
              authorId={item.authorId}
              locationId={item.locationId}
              created={item.created}
              img={item.imageUrl}
              name={item.name}
            />
          ))}
      </div>
      <Pagination theme={theme} pages={pages} currentPage={pageNumber} setPageNumber={setPageNumber} />
    </div>
  )
}

export default App
