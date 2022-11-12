import styles from './OurCaseStudyNav.module.css'
import { useState } from 'react'
import cx from 'classnames'

interface OurCaseStudyNavProps {
  setProjectType: React.Dispatch<React.SetStateAction<string>>
}

export function OurCaseStudyNav({ setProjectType }: OurCaseStudyNavProps) {
  const [activeButton, setActiveButton] = useState(0)
  const buttonsArray = [
    'All',
    'UX Design',
    'Web Design',
    'App Development',
    'Game Design',
    'Graphic Design',
  ]
  return (
    <nav className={styles['our-case-study-nav']}>
      <ul className={styles['list']}>
        {buttonsArray.map((item, index) => {
          return (
            <li key={index} className={styles['items-list']}>
              <button
                onClick={() => {
                  setProjectType(item)
                  setActiveButton(index)
                }}
                className={cx(
                  styles['item-button'],
                  activeButton === index && styles['active-item-button'],
                )}
              >
                <p
                  style={{ color: activeButton === index ? '#FFFF' : '' }}
                  className={styles['item-button-text']}
                >
                  {item}
                </p>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
