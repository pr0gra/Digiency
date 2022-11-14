import styles from './Picture.module.css'
import { HTMLAttributes, PropsWithChildren } from 'react'
import cx from 'classnames'

interface PictureProps {
  imgName: string
  style?: string
}

type Props = PictureProps & PropsWithChildren<HTMLAttributes<HTMLImageElement>>

export function Picture({ children, style, imgName, ...rest }: Props) {
  const imgAvif = `/src/assets/images/${imgName}.avif`
  const imgWebp = `/src/assets/images/${imgName}.webp`
  const imgJpg = `/src/assets/images/${imgName}.jpg`

  return (
    <picture className={cx(styles['picture'], style)} {...rest}>
      {children}
      <source srcSet={imgAvif} type="image/avif" />
      <source srcSet={imgWebp} type="image/webp" />
      <img className={style} src={imgJpg} alt="img" />
    </picture>
  )
}
