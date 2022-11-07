import styles from './Picture.module.css'
import { HTMLAttributes, PropsWithChildren } from 'react'

interface PictureProps {
  imgName: string
  width?: string
  height?: string
}

type Props = PictureProps & PropsWithChildren<HTMLAttributes<HTMLImageElement>>

export function Picture({ imgName, ...rest }: Props) {
  const imgAvif = `/src/assets/images/${imgName}.avif`
  const imgWebp = `/src/assets/images/${imgName}.webp`
  const imgJpg = `/src/assets/images/${imgName}.jpg`

  return (
    <picture className={styles['picture']}>
      <source srcSet={imgAvif} type="image/avif" />
      <source srcSet={imgWebp} type="image/webp" />
      <img {...rest} src={imgJpg} alt="img" />
    </picture>
  )
}
