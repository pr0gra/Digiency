import themeIcon from '../../assets/icons/theme-icon.svg'

interface Props {
  className: string
}

export function ButtonTheme({ className }: Props) {
  return (
    <img
      src={themeIcon}
      alt="light"
      className={className}
      onClick={() => {
        let theme = document.getElementById('theme')
        if (theme!.getAttribute('href') == './src/dark-theme.css') {
          theme!.href = './src/light-theme.css'
        } else {
          theme!.href = './src/dark-theme.css'
        }
      }}
    />
  )
}
