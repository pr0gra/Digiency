import { BlogHero } from '../../../../components/BlogHero/BlogHero'
import styles from './OurBlogHero.module.css'

export function OurBlogHero() {
  return (
    <BlogHero>
      {' '}
      <h1 className={styles['title']}>Our Blog</h1>{' '}
      <h4 className={styles['subtitle']}>Home - Blog Page</h4>
    </BlogHero>
  )
}
