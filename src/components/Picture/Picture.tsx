import styles from './Picture.module.css'

interface PictureProps {
  imgName: string
  width?: string
  height?: string
}

export function Picture({ imgName, width, height }: PictureProps) {
  const imgAvif = `/src/assets/images/${imgName}.avif`
  const imgWebp = `/src/assets/images/${imgName}.webp`
  const imgJpg = `/src/assets/images/${imgName}.jpg`

  return (
    <picture className="picture">
      <source
        style={{ width: width, height: height }}
        srcSet={imgAvif}
        type="image/avif"
      />
      <source
        style={{ width: width, height: height }}
        srcSet={imgWebp}
        type="image/webp"
      />
      <img style={{ width: width, height: height }} src={imgJpg} alt="img" />
    </picture>
  )
}
