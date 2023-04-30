import React, { useState } from 'react'
import { HeaderProps } from './Header.props'
import styles from './Header.module.scss'
import { useForm } from 'react-hook-form'
import { IFilterForm } from '../../../interfaces/RootInterfaces'
import Select from '../../Select/Select'
import { Input } from '../../Input/Input'
import FormToInput from '../../FromToInput/FormToInput'
import ThemeChangeIcon from '../../../assets/ThemeChangeIcon'
import cn from 'classnames'
import Logo from '../../../assets/Logo'

export const Header = ({
  setWordSearch,
  theme,
  changeColorTheme,
  setSearchByDateFrom,
  setSearchByDateTo,
  setLocationId,
  setAuthorId,
  locations,
  authors,
  setFindByFilters,
  ...props
}: HeaderProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors
  } = useForm<IFilterForm>()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  const onSubmit = (data: any) => console.log(data)

  return (
    <div className={styles.wrapper} {...props}>
      <Logo
        className={cn(styles.logo__icon, {
          [styles.dark_logo]: theme == 'dark',
          [styles.light_logo]: theme == 'light'
        })}
      />
      <ThemeChangeIcon
        onClick={() => changeColorTheme(theme)}
        className={cn(styles.them__change, {
          [styles.dark_svg]: theme == 'dark',
          [styles.light_svg]: theme == 'light'
        })}
      />
      <form
        className={cn(styles.form, {
          [styles.dark]: theme == 'dark',
          [styles.light]: theme == 'light'
        })}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          setWordSearch={setWordSearch}
          theme={theme}
          placeholder={'Name'}
          register={register}
          className={cn(styles.form__item, {
            [styles.dark]: theme == 'dark',
            [styles.light]: theme == 'light'
          })}
          name={'q'}
        />
        <Select
          theme={theme}
          register={register}
          setAuthorId={setAuthorId}
          authors={authors}
          className={cn(styles.form__item, {
            [styles.dark]: theme == 'dark',
            [styles.light]: theme == 'light'
          })}
          selectName={'Author'}
          name='authorId'
        ></Select>
        <Select
          theme={theme}
          register={register}
          setLocationId={setLocationId}
          locations={locations}
          className={cn(styles.form__item, {
            [styles.dark]: theme == 'dark',
            [styles.light]: theme == 'light'
          })}
          selectName={'Location'}
          name='locationId'
        ></Select>
        <FormToInput
          theme={theme}
          nameFrom='created_gte'
          nameTo='created_lte'
          registerOne={register}
          registerTwo={register}
          setSearchByDateFrom={setSearchByDateFrom}
          setSearchByDateTo={setSearchByDateTo}
        />
      </form>
    </div>
  )
}
