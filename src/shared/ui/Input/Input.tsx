import classNames from 'classnames'
import {
  FocusEvent,
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
  forwardRef,
  useState,
} from 'react'

type InputHTML = InputHTMLAttributes<HTMLInputElement>
type TextareaHTML = TextareaHTMLAttributes<HTMLTextAreaElement>

export type InputPropsUI = {
  label?: string
  className?: string
  hasError?: boolean
  errorSlot?: ReactNode
  helperText?: string
  filled?: boolean
}
type Props = InputPropsUI & (({ type: string } & InputHTML) | TextareaHTML)

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>((props, ref) => {
  const { label, hasError, errorSlot, helperText, filled, ...rest } = props

  const [isFilled, setIsFilled] = useState(Boolean(filled || rest.value))

  const allProps = {
    ...rest,
    'aria-label': label,
    'aria-invalid': hasError,
    className: classNames('input__input', rest.className),
  }
  const isInput = 'type' in allProps
  const wrapperClassName = classNames('input input--text', {
    'input--textarea': !isInput,
    'input--error': hasError,
    'input--disabled': rest.disabled,
    'input--filled': isFilled,
  })

  return (
    <>
      <div className={wrapperClassName} aria-live='polite'>
        <div className='input__wrapper'>
          {isInput ? (
            <input
              ref={ref as ForwardedRef<HTMLInputElement>}
              {...allProps}
              onBlur={(e: FocusEvent<HTMLInputElement>) => {
                setIsFilled(Boolean(e.target.value))
                allProps.onBlur && allProps.onBlur(e)
              }}
            />
          ) : (
            <textarea ref={ref as ForwardedRef<HTMLTextAreaElement>} {...allProps} />
          )}
          {/* TODO: DIFFERENT SIZE  */}
          <div className='input__border input__border--80'></div>
          <div className='input__placeholder'>{label}</div>
        </div>
        {errorSlot}
        {helperText && <div className='input__helper'>{helperText}</div>}
      </div>
    </>
  )
})
Input.displayName = 'InputUI'
