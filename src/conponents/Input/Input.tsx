import { InputProps } from './Input.props'
import styles from './Input.module.scss'
import cn from 'classnames'
import { ChangeEvent, useEffect, useState } from 'react'
import useDebounce from 'hooks/useDebounce'

interface FindByWord {
  q: number | undefined
}

export const Input = ({
  theme,
  setWordSearch,
  placeholder,
  register,
  name,
  className,
  error,
  ...props
}: InputProps): JSX.Element => {
  const [value, setValue] = useState<string | undefined>(undefined)

  function handleChangeFromInput(event: any) {
    setValue(event.target.value)
  }

  useEffect(() => {}, [value])

  const debouncedValue = useDebounce<string | undefined>(value, 500)

  useEffect(() => {
    setWordSearch(value)
  }, [debouncedValue])
  return (
    <>
      <input
        placeholder={placeholder}
        {...register(name)}
        className={cn(styles.input, {
          [styles.error]: error,
          [styles.dark]: theme == 'dark',
          [styles.light]: theme == 'light'
        })}
        onChange={event => handleChangeFromInput(event)}
        {...props}
      />
      {error && (
        <span role='alert' className={styles.errorMessage}>
          {error.message}
        </span>
      )}
    </>
  )
}
