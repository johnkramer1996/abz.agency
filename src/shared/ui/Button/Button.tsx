import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { onScrollToBlock } from 'shared/lib'

type ButtonHTML = ButtonHTMLAttributes<HTMLButtonElement>
type AnchorHTML = AnchorHTMLAttributes<HTMLAnchorElement>

type ButtonTheme = 'accent' | 'secondary'

export type ButtonProps2 = {
  children?: ReactNode
  theme?: ButtonTheme
  loading?: boolean
  disabled?: boolean
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: ReactNode
  theme?: ButtonTheme
  loading?: boolean
  disabled?: boolean
  className?: string
} & (({ to: string } & AnchorHTML) | ButtonHTML)

export const Button = (props: ButtonProps) => {
  const { children, theme = 'accent', loading, disabled, className, ...rest } = props

  const fullClassName = classNames(`btn btn--${theme}`, className, {
    'btn--loading': loading,
    'btn--disabled': disabled || loading,
  })

  return (
    <>
      {'to' in rest ? (
        rest.to[0] === '#' ? (
          <a href={rest.to} className={fullClassName} {...rest} onClick={(e) => onScrollToBlock(e, rest.to)}>
            {children}
          </a>
        ) : (
          <Link {...rest} to={rest.to} className={fullClassName}>
            {children}
          </Link>
        )
      ) : (
        <button className={fullClassName} {...rest} disabled={disabled || loading}>
          {children}
          {loading && (
            <span className='btn__loader'>
              <i></i>
              <i></i>
              <i></i>
            </span>
          )}
        </button>
      )}
    </>
  )
}
