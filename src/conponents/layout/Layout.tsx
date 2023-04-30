import React from 'react'
import { LayoutPropsInterface } from './Layout.props'
import cn from 'classnames'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux'
import { themeSlice } from '../../store/reducers/themeSlice'
import styles from './Layout.module.scss'

const Layout = ({ children }: LayoutPropsInterface) => {
  const { theme } = useTypedSelector(state => state.theme)

  return (
    <div
      className={cn(styles.layout, {
        [styles.dark]: theme == 'dark',
        [styles.light]: theme == 'light'
      })}
    >
      {children}
    </div>
  )
}

export default Layout
