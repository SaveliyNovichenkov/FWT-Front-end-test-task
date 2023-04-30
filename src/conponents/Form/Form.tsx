import React from 'react'
import { useForm } from 'react-hook-form'
import { FormProps } from './Form.props'

export function Form({ defaultValues, children, onSubmit, className, ...props }: FormProps) {
  const { handleSubmit, register } = useForm({ defaultValues })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className} {...props}>
      {Array.isArray(children)
        ? children.map(child => {
            return child.props.name
              ? React.createElement(child.type, { ...{ ...child.props, register, key: child.props.name } })
              : child
          })
        : children}
    </form>
  )
}
