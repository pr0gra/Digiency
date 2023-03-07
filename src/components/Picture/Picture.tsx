import styles from './Picture.module.css'
import { HTMLAttributes, PropsWithChildren } from 'react'
import cx from 'classnames'

interface PictureProps {
  imgName: string
  style?: string
}

type Props = PictureProps & PropsWithChildren<HTMLAttributes<HTMLImageElement>>

export function Picture({ children, style, imgName, ...rest }: Props) {
  const imgAvif = `/assets/images/${imgName}.avif`
  const imgWebp = `/assets/images/${imgName}.webp`
  const imgJpg = `/assets/images/${imgName}.jpg`

  return (
    <picture className={cx(styles['picture'], style)} {...rest}>
      {children}
      <source srcSet={imgAvif} type="image/avif" />
      <source srcSet={imgWebp} type="image/webp" />
      <img src={imgJpg} alt="img" />
    </picture>
  )
}
