import { InputHTMLAttributes, forwardRef } from 'react'

export const RadioInput = forwardRef<
  HTMLInputElement,
  { value: string | number; label: string } & InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const { value, label, ...rest } = props

  const allProps = {
    ...rest,
    value,
  }

  return (
    <label className='input-radio'>
      <input className='input-radio__input' type='radio' ref={ref} {...allProps} />
      <i className='input-radio__check'></i>
      <span className='input-radio__label'>{label}</span>
    </label>
  )
})
