import { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchTheme } from '../../../redux/themeSlice'
import themeIcon from '../../assets/icons/theme-icon.svg'
import lightThemeIcon from '../../assets/icons/sun.png'
import darkThemeIcon from '../../assets/icons/dark.png'
import autoThemeIcon from '../../assets/icons/auto-theme.png'
import { SwitchingThemeAuto } from '../../functions/SwitchingThemeAuto'
import styles from './ButtonTheme.module.css'

interface Component {
  styles?: string
}
interface FC {
  name: string
  content: string
}
type Test = FC
export const ButtonTheme = memo(() => {
  const dispatch = useDispatch()
  const currentTheme = useSelector(state => state.theme.theme)

  function handleTheme() {
    if (currentTheme === 'light') {
      document.body.classList.add('dark-mode')
      document.body.classList.remove('light-mode')
      dispatch(switchTheme('dark'))
    } else if (currentTheme === 'dark') {
      document.body.classList.remove('dark-mode')
      document.body.classList.remove('light-mode')
      dispatch(switchTheme('auto'))
    } else if (currentTheme === 'auto') {
      document.body.classList.remove('dark-mode')
      document.body.classList.add('light-mode')
      dispatch(switchTheme('light'))
    }
  }
  return (
    <img
      src={
        currentTheme === 'auto'
          ? autoThemeIcon
          : currentTheme === 'light'
          ? lightThemeIcon
          : darkThemeIcon
      }
      alt="theme"
      className={styles['button-theme']}
      id="switchTheme"
      onClick={() => {
        handleTheme()
      }}
    />
  )
})
