import styles from './Button.module.css'
import cx from 'classnames'
import { HTMLAttributes, PropsWithChildren } from 'react'

interface ButtonProps {
  buttonType: string
}

type Props = ButtonProps & PropsWithChildren<HTMLAttributes<HTMLButtonElement>>

export function Button({ children, buttonType, ...rest }: Props) {
  return (
    <button className={cx(styles['button'], styles[`${buttonType}`])} {...rest}>
      {children}
    </button>
  )
}
