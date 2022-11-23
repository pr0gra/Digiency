import styles from './BlogHero.module.css'
import { HTMLAttributes, PropsWithChildren } from 'react'

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export function BlogHero({ children, ...rest }: Props) {
  return (
    <div {...rest} className={styles['blog-hero']}>
      {children}
    </div>
  )
}
