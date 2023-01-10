import styles from './SearchPart.module.css'
import postIcon1 from '../../../../assets/icons/latest-post-icon-1.svg'
import postIcon2 from '../../../../assets/icons/latest-post-icon-2.svg'
import postIcon3 from '../../../../assets/icons/latest-post-icon-3.svg'
import postIcon4 from '../../../../assets/icons/latest-post-icon-4.svg'
import postIcon5 from '../../../../assets/icons/latest-post-icon-5.svg'
import searchInput from '../../../../assets/icons/search-icon.svg'
import { useState } from 'react'

interface Props {
  setSearchText: React.Dispatch<React.SetStateAction<string>>
}

export function SearchPart({ setSearchText }: Props) {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className={styles['search-part']}>
      <form
        onSubmit={e => {
          e.preventDefault()
          setSearchText(inputValue)
        }}
        className={styles['input-part']}
      >
        <input
          onChange={e => {
            setInputValue(e.target.value)
          }}
          placeholder="Search here..."
          className={styles['input']}
          type="text"
        />
        <img src={searchInput} alt="" />
      </form>
      <ul className={styles['latest-post-container']}>
        <h2 className={styles['title']}>Letest Post</h2>
        <li className={styles['latest-post']}>
          <img className={styles['post-img']} src={postIcon1} alt="" />
          <h5 className={styles['post-title']}>
            Minimal Post With A Preview Image
          </h5>
        </li>
        <li className={styles['latest-post']}>
          <img className={styles['post-img']} src={postIcon2} alt="" />
          <h5 className={styles['post-title']}>Good Design Makes Me Happy</h5>
        </li>
        <li className={styles['latest-post']}>
          <img className={styles['post-img']} src={postIcon3} alt="" />
          <h5 className={styles['post-title']}>
            Best 27 Design Blogs for 2021
          </h5>
        </li>
        <li className={styles['latest-post']}>
          <img className={styles['post-img']} src={postIcon4} alt="" />
          <h5 className={styles['post-title']}>
            Creative Ways To Use Infographics For Your Business
          </h5>
        </li>
        <li className={styles['latest-post']}>
          <img className={styles['post-img']} src={postIcon5} alt="" />
          <h5 className={styles['post-title']}>
            Tumblr Banner Templates : Tips To Get Better Engagement
          </h5>
        </li>
      </ul>
      <div className={styles['categories-container']}>
        <h2 className={styles['title']}>Categories</h2>
        <ul className={styles['categories-list']}>
          <li className={styles['category']}>
            <h5 className={styles['category-title']}>Business</h5>
            <h5 className={styles['category-number']}>05</h5>
          </li>
          <li className={styles['category']}>
            <h5 className={styles['category-title']}>Introductions</h5>
            <h5 className={styles['category-number']}>15</h5>
          </li>
          <li className={styles['category']}>
            <h5 className={styles['category-title']}>Design Blog</h5>
            <h5 className={styles['category-number']}>65</h5>
          </li>
          <li className={styles['category']}>
            <h5 className={styles['category-title']}>UI/UX Design</h5>
            <h5 className={styles['category-number']}>08</h5>
          </li>
          <li className={styles['category']}>
            <h5 className={styles['category-title']}>App Development</h5>
            <h5 className={styles['category-number']}>16</h5>
          </li>
        </ul>
      </div>
      <div className={styles['tags-container']}>
        <h2 className={styles['title']}>Tags</h2>
        <ul className={styles['tags-list']}>
          <li className={styles['tag-item']}>
            <h5>Business</h5>
          </li>
          <li className={styles['tag-item']}>
            <h5>Graphic Design</h5>
          </li>
          <li className={styles['tag-item']}>
            <h5>Technology</h5>
          </li>
          <li className={styles['tag-item']}>
            <h5>App Development</h5>
          </li>
          <li className={styles['tag-item']}>
            <h5>Website Design</h5>
          </li>
          <li className={styles['tag-item']}>
            <h5>Business Idea</h5>
          </li>
        </ul>
      </div>
    </div>
  )
}
