import styles from './AboutUs.module.css'
import aboutUsImg from '../../../../assets/images/about-us-img.svg'
import { Button } from '../../../../components/Button/Button'
import folderIcon from '../../../../assets/icons/about-us-folder-icon.svg'
import quotesIcon from '../../../../assets/icons/about-us-quotes-icon.svg'
import settingsIcon from '../../../../assets/icons/about-us-settings-icon.svg'
import vectorIcon from '../../../../assets/icons/about-us-vector-icon.svg'

export function AboutUs() {
  return (
    <div className={styles['about-us']}>
      <div className={styles['top-part']}>
        <img className={styles['about-us-img']} src={aboutUsImg} alt="" />
        <div className={styles['about-us-text-part']}>
          <p className={styles['about-us-subtitle']}>About Us</p>
          <h2 className={styles['about-us-title']}>
            We Are <span>Making Ideas Better</span> For Everyone
          </h2>
          <p className={styles['about-us-subtitle']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean{' '}
          </p>
          <p className={styles['about-us-subtitle']}>
            Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
            faucibus est, dui interdum ut amet.
          </p>
          <Button buttonType="button-primary">Contact us</Button>
        </div>
      </div>
      <div className={styles['about-us-content-array']}>
        <div className={styles['about-us-item']}>
          <img
            style={{
              background: '#FF5300',
              boxShadow: '4px 5px 15px rgba(255, 83, 0, 0.4)',
            }}
            className={styles['about-us-item-img']}
            src={folderIcon}
            alt=""
          />
          <h3 className="about-us-item-title">
            World leader in consulting and finance
          </h3>
        </div>
        <div className={styles['about-us-item']}>
          <img
            style={{
              background: '#7B7B7B',
              boxShadow: '4px 5px 15px rgba(0, 0, 0, 0.4)',
            }}
            className={styles['about-us-item-img']}
            src={quotesIcon}
            alt=""
          />
          <h3 className="about-us-item-title">
            A focused team with a specialized skill
          </h3>
        </div>
        <div className={styles['about-us-item']}>
          <img
            style={{
              background: '#00ACFF',
              boxShadow: '4px 5px 15px rgba(0, 194, 255, 0.4)',
            }}
            className={styles['about-us-item-img']}
            src={settingsIcon}
            alt=""
          />
          <h3 className="about-us-item-title">
            Trusted and professional advisors for you
          </h3>
        </div>
        <div className={styles['about-us-item']}>
          <img
            style={{
              background: '#373737',
              boxShadow: '4px 5px 15px rgba(0, 0, 0, 0.4)',
            }}
            className={styles['about-us-item-img']}
            src={vectorIcon}
            alt=""
          />
          <h3 className="about-us-item-title">
            Experience to give you a better results
          </h3>
        </div>
      </div>
    </div>
  )
}
