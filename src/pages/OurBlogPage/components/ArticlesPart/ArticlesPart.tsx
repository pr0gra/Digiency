import styles from './ArticlesPart.module.css'
import { Picture } from '../../../../components/Picture/Picture'
import timerIcon from '../../../../assets/icons/our-blog-timer.svg'
import personIcon from '../../../../assets/icons/our-blog-person.svg'
import messageIcon from '../../../../assets/icons/our-blog-message.svg'
import { Link } from 'react-router-dom'

export function ArticlesPart() {
  return (
    <div className={styles['articles-part']}>
      {articles?.map((article, index) => {
        return (
          <div key={index} className={styles['article']}>
            <Picture style={styles['main-img']} imgName={article.img} />
            <ul className={styles['article-info']}>
              <li className={styles['article-info-item']}>
                <img className={styles['article-img']} src={timerIcon} alt="" />
                <p className={styles['article-info-text']}>
                  {article.created_at}
                </p>
              </li>
              <li className={styles['article-info-item']}>
                <img
                  className={styles['article-img']}
                  src={personIcon}
                  alt=""
                />
                <p className={styles['article-info-text']}>{article.author}</p>
              </li>
              <li className={styles['article-info-item']}>
                <img
                  className={styles['article-img']}
                  src={messageIcon}
                  alt=""
                />
                <p className={styles['article-info-text']}>10 Comment</p>
              </li>
            </ul>
            <h2 className={styles['title']}>{article.title}</h2>
            <p className={styles['text']}>{article.content}</p>
            <Link to={`/blog/${article.id}`} className={styles['link']}>
              Read More
            </Link>
          </div>
        )
      })}{' '}
    </div>
  )
}
