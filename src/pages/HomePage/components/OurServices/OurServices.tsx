import styles from './OurServices.module.css'
import uxDesignImg from '../../../../assets/icons/ux-interface-min.svg'
import gameDesignImg from '../../../../assets/icons/gaming-min.svg'
import graphicDesignImg from '../../../../assets/icons/design-min.svg'
import appDevelopmentImg from '../../../../assets/icons/mobile-development-min.svg'
import digitalMarketingImg from '../../../../assets/icons/digital-marketing-min.svg'
import webDesignImg from '../../../../assets/icons/web-design-min.svg'

export function OurServices() {
  return (
    <div className={styles['our-services']}>
      <p className={styles['subtitle']}>____ Our Services ____</p>
      <h2 className={styles['title']}>What We Do</h2>
      <div className={styles['services']}>
        <div className={styles['service']}>
          <div className={styles['service-top-part']}>
            <img className={styles['img']} src={uxDesignImg} alt="" />
            <h2 className={styles['number']}>01</h2>
          </div>
          <div className={styles['service-bottom-part']}>
            <h2 className={styles['service-title']}>UX Design</h2>
            <p className={styles['service-subtitle']}>Mobile App, Website</p>
            <p className={styles['service-text']}>
              Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
              Accumsan sed faucibu s faucibus augue. Cras ut.
            </p>
          </div>
        </div>
        <div className={styles['service']}>
          <div className={styles['service-top-part']}>
            <img className={styles['img']} src={gameDesignImg} alt="" />
            <h2 className={styles['number']}>02</h2>
          </div>
          <div className={styles['service-bottom-part']}>
            <h2 className={styles['service-title']}>Game Design</h2>
            <p className={styles['service-subtitle']}>Mobile App, Website</p>
            <p className={styles['service-text']}>
              Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
              Accumsan sed faucibu s faucibus augue. Cras ut.
            </p>
          </div>
        </div>
        <div className={styles['service']}>
          <div className={styles['service-top-part']}>
            <img className={styles['img']} src={graphicDesignImg} alt="" />
            <h2 className={styles['number']}>03</h2>
          </div>
          <div className={styles['service-bottom-part']}>
            <h2 className={styles['service-title']}>Graphic Design</h2>
            <p className={styles['service-subtitle']}>Mobile App, Website</p>
            <p className={styles['service-text']}>
              Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
              Accumsan sed faucibu s faucibus augue. Cras ut.
            </p>
          </div>
        </div>
        <div className={styles['service']}>
          <div className={styles['service-top-part']}>
            <img className={styles['img']} src={webDesignImg} alt="" />
            <h2 className={styles['number']}>04</h2>
          </div>
          <div className={styles['service-bottom-part']}>
            <h2 className={styles['service-title']}>Web Design</h2>
            <p className={styles['service-subtitle']}>Mobile App, Website</p>
            <p className={styles['service-text']}>
              Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
              Accumsan sed faucibu s faucibus augue. Cras ut.
            </p>
          </div>
        </div>
        <div className={styles['service']}>
          <div className={styles['service-top-part']}>
            <img className={styles['img']} src={appDevelopmentImg} alt="" />
            <h2 className={styles['number']}>05</h2>
          </div>
          <div className={styles['service-bottom-part']}>
            <h2 className={styles['service-title']}>App Development</h2>
            <p className={styles['service-subtitle']}>Mobile App, Website</p>
            <p className={styles['service-text']}>
              Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
              Accumsan sed faucibu s faucibus augue. Cras ut.
            </p>
          </div>
        </div>
        <div className={styles['service']}>
          <div className={styles['service-top-part']}>
            <img className={styles['img']} src={digitalMarketingImg} alt="" />
            <h2 className={styles['number']}>06</h2>
          </div>
          <div className={styles['service-bottom-part']}>
            <h2 className={styles['service-title']}>Digital Marketing</h2>
            <p className={styles['service-subtitle']}>Mobile App, Website</p>
            <p className={styles['service-text']}>
              Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
              Accumsan sed faucibu s faucibus augue. Cras ut.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
