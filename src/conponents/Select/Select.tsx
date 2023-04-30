import React, { useEffect, useRef, useState } from 'react'
import { SelectProps } from './Select.props'
import styles from './Select.module.scss'
import cn from 'classnames'
import VectorForInput from '../../assets/VectorForInput'
import CrossForInput from '../../assets/CrossForInput'

const Select = ({
  theme,
  name,
  register,
  setLocationId,
  setAuthorId,
  selectName,
  className,
  authors,
  locations,
  ...props
}: SelectProps) => {
  const [active, setActive] = useState<boolean>(false)
  const [option, setOption] = useState<string>('')

  const chooseOption = (value: string, id: number) => {
    if (setAuthorId) setAuthorId(id)
    if (setLocationId) setLocationId(id)
    setOption(value)
  }

  const clearSelect = (type: 'author' | 'location') => {
    if (type == 'author' && setAuthorId) setAuthorId(undefined)
    if (type == 'location' && setLocationId) setLocationId(undefined)
    setOption('')
  }

  return (
    <div
      className={cn(styles.select, className, {
        [styles.activeSelect]: active == true,
        [styles.dark]: theme == 'dark',
        [styles.light]: theme == 'light'
      })}
    >
      <button
        className={cn(styles.button, {
          [styles.dark__btn]: theme == 'dark',
          [styles.light__btn]: theme == 'light'
        })}
        onClick={() => setActive(prev => !prev)}
        {...props}
      >
        <span>{option ? option : selectName}</span>
      </button>
      {active && (
        <ul
          className={cn(styles.ul, {
            [styles.dark__ul]: theme == 'dark',
            [styles.light__ul]: theme == 'light'
          })}
          multiple='multiple'
          size={7}
          {...register(name)}
        >
          {authors &&
            setAuthorId &&
            authors.map(author => (
              <li
                className={cn(styles.li, {
                  [styles.dark__li]: theme == 'dark',
                  [styles.light__li]: theme == 'light'
                })}
                key={author.id}
                value={author.id}
                onClick={() => chooseOption(author.name, author.id)}
              >
                {author.name}
              </li>
            ))}
          {locations &&
            setLocationId &&
            locations.map(location => (
              <li
                className={cn(styles.li, {
                  [styles.dark__li]: theme == 'dark',
                  [styles.light__li]: theme == 'light'
                })}
                key={location.id}
                value={location.id}
                onClick={() => chooseOption(location.location, location.id)}
              >
                {location.location}
              </li>
            ))}
        </ul>
      )}
      {active && option && authors && (
        <CrossForInput onClick={() => clearSelect('author')} className={cn(styles.cross)} />
      )}
      {active && option && locations && (
        <CrossForInput onClick={() => clearSelect('location')} className={cn(styles.cross)} />
      )}
      <VectorForInput
        className={cn(styles.vector, {
          [styles.activeVector]: active == true
        })}
      />
    </div>
  )
}

export default Select
