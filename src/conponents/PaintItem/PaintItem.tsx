import React, { useEffect, useState } from 'react'
import { PaintItemProps } from './PaintItemProps'
import styles from './PaintItem.module.scss'
import axios from 'axios'
import { IAuthor, ILocation } from '../../interfaces/RootInterfaces'
import cn from 'classnames'

const PaintItem = ({ theme, img, name, created, authorId, locationId, ...props }: PaintItemProps) => {
  const [author, setAuthor] = useState<IAuthor | null>(null)
  const [location, setLocation] = useState<ILocation | null>(null)

  useEffect(() => {
    const fetchAuthor = async () => {
      const responseAuthor = await axios.get(process.env.REACT_APP_URI + '/authors', { params: { id: authorId } })
      const resLocation = await axios.get(process.env.REACT_APP_URI + '/locations', { params: { id: locationId } })
      setAuthor(responseAuthor.data[0])
      setLocation(resLocation.data[0])
    }
    fetchAuthor()
  }, [])
  const [isShow, setIsShow] = useState<boolean>(false)
  return (
    <div
      className={styles.wrapper}
      {...props}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <img src={process.env.REACT_APP_URI + `${img}`} />
      <span className={styles.info__wrapper}>
        <div className={styles.name}>{name}</div>
        {author && (
          <div
            className={cn(styles.small__info__title, {
              [styles.dark]: theme == 'dark',
              [styles.light]: theme == 'light'
            })}
          >
            Author: <span>{author.name}</span>{' '}
          </div>
        )}
        <div
          className={cn(styles.small__info__title, {
            [styles.dark]: theme == 'dark',
            [styles.light]: theme == 'light'
          })}
        >
          Created: <span>{created}</span>{' '}
        </div>
        <div
          className={cn(styles.small__info__title, {
            [styles.dark]: theme == 'dark',
            [styles.light]: theme == 'light'
          })}
        >
          Location: <span>{location?.location}</span>{' '}
        </div>
      </span>
    </div>
  )
}

export default PaintItem
