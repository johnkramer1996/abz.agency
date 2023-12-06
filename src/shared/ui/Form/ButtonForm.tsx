import React from 'react'
import { Button, ButtonProps } from '../Button/Button'
import { useFormContext } from 'react-hook-form'

type Props = ButtonProps

export const ButtonForm = (props: Props) => {
  const {
    formState: { isDirty, isSubmitting },
  } = useFormContext()
  return (
    <Button {...props} disabled={!isDirty} loading={isSubmitting}>
      Sign up
    </Button>
  )
}
