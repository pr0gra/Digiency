import { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchTheme } from '../../../redux/themeSlice'
import themeIcon from '../../assets/icons/theme-icon.svg'

interface Component {
  styles?: string
}
interface FC {
  name: string
  content: string
}
type Test = FC
export const ButtonTheme = memo(({ styles }: Component) => {
  const [invert, setInvert] = useState(0)
  const dispatch = useDispatch()
  const isDarkTheme = useSelector(state => state.theme.darkTheme)

  return (
    <img
      src={themeIcon}
      alt="light"
      className={styles}
      id="switchTheme"
      style={{ filter: `invert(${+isDarkTheme})` }}
      onClick={() => {
        const meta: Test | any = document.querySelector(
          'meta[name="color-scheme"]',
        )
        if (meta!.content === 'dark') {
          meta!.content = 'light'
          document.body.classList.remove('dark-mode')
          document.body.classList.add('light-mode')
          dispatch(switchTheme())
        } else {
          meta!.content = 'dark'
          document.body.classList.remove('light-mode')
          document.body.classList.add('dark-mode')
          dispatch(switchTheme())
        }
      }}
    />
  )
})
