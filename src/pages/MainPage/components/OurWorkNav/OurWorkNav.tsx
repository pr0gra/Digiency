import { useState } from 'react'
import styles from './OurWorkNav.module.css'

interface OurWorkNavProps {
  setProjectType: React.Dispatch<React.SetStateAction<string>>
}

export function OurWorkNav({ setProjectType }: OurWorkNavProps) {
  const [activeButton, setActiveButton] = useState(0)
  const buttonsArray = [
    'All',
    'Graphic Design',
    'UI/UX Design',
    'Web Development',
  ]
  return (
    <nav className={styles['our-work-navigation']}>
      <ul className={styles['our-work-navigation-list']}>
        {buttonsArray.map((item, index) => {
          return (
            <li key={index} className={styles['our-work-navigation-list-item']}>
              <button
                onClick={() => {
                  setProjectType(item)
                  setActiveButton(index)
                }}
                className={styles['our-work-navigation-list-item-button']}
              >
                <p
                  style={{ color: activeButton === index ? '#FF5300' : '' }}
                  className={
                    styles['our-work-navigation-list-item-button-text']
                  }
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
