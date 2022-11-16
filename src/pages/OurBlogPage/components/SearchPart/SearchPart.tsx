import styles from './SearchPart.module.css'
import postIcon1 from '../../../../assets/icons/latest-post-icon-1.svg'
import postIcon2 from '../../../../assets/icons/latest-post-icon-2.svg'
import postIcon3 from '../../../../assets/icons/latest-post-icon-3.svg'
import postIcon4 from '../../../../assets/icons/latest-post-icon-4.svg'
import postIcon5 from '../../../../assets/icons/latest-post-icon-5.svg'
import searchInput from '../../../../assets/icons/search-icon.svg'

export function SearchPart() {
  return (
    <div className={styles['search-part']}>
      <div className={styles['input-part']}>
        <input
          placeholder="Search here..."
          className={styles['input']}
          type="text"
        />
        <img src={searchInput} alt="" />
      </div>
      <ul className={styles['latest-post-container']}>
        <h2 className={styles['title']}>Letest Post</h2>
        <li className={styles['latest-post']}>
          <img className={styles['post-img']} src={postIcon1} alt="" />
          <h3 className={styles['post-title']}>
            Minimal Post With A Preview Image
          </h3>
        </li>
        <li className={styles['latest-post']}>
          <img className={styles['post-img']} src={postIcon2} alt="" />
          <h3 className={styles['post-title']}>Good Design Makes Me Happy</h3>
        </li>
        <li className={styles['latest-post']}>
          <img className={styles['post-img']} src={postIcon3} alt="" />
          <h3 className={styles['post-title']}>
            Best 27 Design Blogs for 2021
          </h3>
        </li>
        <li className={styles['latest-post']}>
          <img className={styles['post-img']} src={postIcon4} alt="" />
          <h3 className={styles['post-title']}>
            Creative Ways To Use Infographics For Your Business
          </h3>
        </li>
        <li className={styles['latest-post']}>
          <img className={styles['post-img']} src={postIcon5} alt="" />
          <h3 className={styles['post-title']}>
            Tumblr Banner Templates : Tips To Get Better Engagement
          </h3>
        </li>
      </ul>
      <div className={styles['categories-container']}>
        <h2 className={styles['title']}>Categories</h2>
        <ul className={styles['categories-list']}>
          <li className={styles['category']}>
            <h3 className={styles['category-title']}>Business</h3>
            <h3 className={styles['category-number']}>05</h3>
          </li>
          <li className={styles['category']}>
            <h3 className={styles['category-title']}>Introductions</h3>
            <h3 className={styles['category-number']}>15</h3>
          </li>
          <li className={styles['category']}>
            <h3 className={styles['category-title']}>Design Blog</h3>
            <h3 className={styles['category-number']}>65</h3>
          </li>
          <li className={styles['category']}>
            <h3 className={styles['category-title']}>UI/UX Design</h3>
            <h3 className={styles['category-number']}>08</h3>
          </li>
          <li className={styles['category']}>
            <h3 className={styles['category-title']}>App Development</h3>
            <h3 className={styles['category-number']}>16</h3>
          </li>
        </ul>
      </div>
      <div className={styles['tags-container']}>
        <h2 className={styles['title']}>Tags</h2>
        <ul className={styles['tags-list']}>
          <li className={styles['tag-item']}>
            <h3>Business</h3>
          </li>
          <li className={styles['tag-item']}>
            <h3>Graphic Design</h3>
          </li>
          <li className={styles['tag-item']}>
            <h3>Technology</h3>
          </li>
          <li className={styles['tag-item']}>
            <h3>App Development</h3>
          </li>
          <li className={styles['tag-item']}>
            <h3>Website Design</h3>
          </li>
          <li className={styles['tag-item']}>
            <h3>Business Idea</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}
