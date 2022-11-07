import styles from './Footer.module.css'
import mainLogo from '../../assets/icons/digiency-footer.svg'
import facebookLogo from '../../assets/icons/facebook-fill.svg'
import instLogo from '../../assets/icons/instagram-fill.svg'
import twitterLogo from '../../assets/icons/twitter-fill.svg'
import skypeLogo from '../../assets/icons/skype-fill.svg'
import planeIcon from '../../assets/icons/plane-icon.svg'
import { MediaLinks } from '../MediaLinks/MediaLinks'

export function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['media-part']}>
        <img className={styles['img-logo']} src={mainLogo} alt="" />
        <p className={styles['text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, cursus
          egestas etiam posuere vitae cursus consectetur eu. Cursus vitae
          porttitor libero est posuere.
        </p>
        <MediaLinks
          facebookLink="/"
          instLink="/"
          twitterLink="/"
          skypeLink="/"
        />
      </div>
      <div className={styles['nav-container']}>
        <h2 className={styles['title']}>Company</h2>
        <div className={styles['nav']}>
          <a className={styles['text']} href="">
            About Us
          </a>
          <a className={styles['text']} href="">
            Our Work
          </a>
          <a className={styles['text']} href="">
            Client
          </a>
          <a className={styles['text']} href="">
            Our Blog
          </a>
          <a className={styles['text']} href="">
            Contact US
          </a>
        </div>
      </div>
      <div className={styles['nav-container']}>
        <h2 className={styles['title']}>Sevices</h2>
        <div className={styles['nav']}>
          <a className={styles['text']} href="">
            Graphic Design
          </a>
          <a className={styles['text']} href="">
            UI/UX Design
          </a>
          <a className={styles['text']} href="">
            Web Development
          </a>
          <a className={styles['text']} href="">
            App Development
          </a>
          <a className={styles['text']} href="">
            Web Hosting
          </a>
        </div>
      </div>
      <div className={styles['nav-form-container']}>
        <h2 className={styles['title']}>Newsletter</h2>
        <p className={styles['text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu feugiat
          in mollis augue vel aliquam. Ut faucibus elit, libero varius.
        </p>
        <form className={styles['form']}>
          <input
            className={styles['form-input']}
            placeholder="info@gmail.com"
            type="text"
            name=""
            id=""
          />
          <button className={styles['form-button']}>
            <img className={styles['form-button-img']} src={planeIcon} alt="" />
          </button>
        </form>
      </div>
    </footer>
  )
}
