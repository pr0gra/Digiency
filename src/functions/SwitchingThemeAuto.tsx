import { useDispatch } from 'react-redux'
import { switchTheme } from '../../redux/themeSlice'

export function SwitchingThemeAuto() {
  const dispatch = useDispatch()
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  console.log(mql)
  if (mql.matches === false) {
    document.body.classList.remove('dark-mode')
    document.body.classList.add('light-mode')
    dispatch(switchTheme('light'))
  } else {
    document.body.classList.remove('light-mode')
    document.body.classList.add('dark-mode')
    dispatch(switchTheme('dark'))
  }
}
