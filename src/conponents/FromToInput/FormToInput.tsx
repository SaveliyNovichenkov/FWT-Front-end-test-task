import React, { ChangeEvent, ForwardedRef, useEffect, useRef, useState } from 'react'
import { Input } from '../Input/Input'
import styles from './FormToInput.module.scss'
import { FormToInputProps } from './FormToInput.props'
import cn from 'classnames'
import VectorForInput from '../../assets/VectorForInput'
import { useDebounce } from '../../hooks/useDebounce'

interface FromToDto {
  created_gte: number | undefined
  created_lte: number | undefined
}

const FormToInput = ({
  theme,
  registerOne,
  registerTwo,
  nameFrom,
  nameTo,
  setSearchByDateFrom,
  setSearchByDateTo,
  className,
  ...props
}: FormToInputProps) => {
  const [active, setActive] = useState<boolean>(false)
  const [valueFrom, setValueFrom] = useState<number | undefined>(undefined)
  const [valueTo, setValueTo] = useState<number | undefined>(undefined)
  const [value, setValue] = useState<FromToDto>({ created_gte: undefined, created_lte: undefined })

  const debouncedValue = useDebounce<FromToDto>(value, 500)

  function handleChangeFromInput(event: ChangeEvent<HTMLInputElement>) {
    setValueFrom(Number(event.target.value))
  }
  function handleChangeToInput(event: ChangeEvent<HTMLInputElement>) {
    setValueTo(Number(event.target.value))
  }

  useEffect(() => {
    setValue({ created_gte: valueFrom, created_lte: valueTo })
  }, [valueTo, valueFrom])

  useEffect(() => {
    setSearchByDateFrom(valueFrom)
    setSearchByDateTo(valueTo)
  }, [debouncedValue])

  return (
    <div
      className={cn(styles.wrapper, className, {
        [styles.dark]: theme == 'dark',
        [styles.light]: theme == 'light',
        [styles.activeWrapper]: active == true
      })}
    >
      <button
        className={cn(styles.button, className, {
          [styles.dark__btn]: theme == 'dark',
          [styles.light__btn]: theme == 'light'
        })}
        onClick={() => setActive(prev => !prev)}
        {...props}
      >
        <span>Created</span>
      </button>
      {active && value && debouncedValue && (
        <div
          className={cn(styles.main, className, {
            [styles.dark__main]: theme == 'dark',
            [styles.light__main]: theme == 'light'
          })}
        >
          <input
            {...registerOne(nameFrom)}
            onChange={event => handleChangeFromInput(event)}
            className={cn(styles.from__input, className, {
              [styles.dark__input]: theme == 'dark',
              [styles.light__input]: theme == 'light'
            })}
            placeholder={'from'}
          />
          <hr />
          <input
            {...registerTwo(nameTo)}
            onChange={event => handleChangeToInput(event)}
            className={cn(styles.from__input, className, {
              [styles.dark__input]: theme == 'dark',
              [styles.light__input]: theme == 'light'
            })}
            placeholder={'to'}
          />
        </div>
      )}
      <VectorForInput
        className={cn(styles.vector, {
          [styles.activeVector]: active == true
        })}
      />
    </div>
  )
}

export default FormToInput
