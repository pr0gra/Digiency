import styles from './OurCapabilities.module.css'
import ourCapabilitiesImage from '../../../../assets/images/our-capabilities-image.svg'
import expertsImg from '../../../../assets/icons/our-capabilities-experts-icon.svg'
import strategiesImg from '../../../../assets/icons/our-capabilities-strategies-icon.svg'
import resultsImg from '../../../../assets/icons/our-capabilities-results-icon.svg'
import rankingImg from '../../../../assets/icons/our-capabilities-rankings-icon.svg'
import rectangle from '../../../../assets/icons/reactangle-icon.svg'

export function OurCapabilities() {
  return (
    <div className={styles['our-capabilities']}>
      <div className={styles['top-part']}>
        <div className={styles['text-part']}>
          <p className={styles['subtitle']}>Our Capabilities ____</p>
          <h2 className={styles['title']}>
            Forward Thinking Team Of Designers & Developers
          </h2>
          <p className={styles['text']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ut
            nisi, amet rhoncus volutpat neque. Ipsum in aliquam eget vitae purus
            felis eget massa felis. Eu mattis in malesuada facilisi proin vel.
          </p>
          <div className={styles['statistic-part']}>
            <div className={styles['statistic-item']}>
              <h2 className={styles['statistic-percent']}>80%</h2>
              <p className={styles['statistic-name']}>
                Softwer <br /> Development
              </p>
            </div>
            <div className={styles['statistic-item']}>
              <h2 className={styles['statistic-percent']}>90%</h2>
              <p className={styles['statistic-name']}>
                Graphic <br /> Design
              </p>{' '}
            </div>
            <div className={styles['statistic-item']}>
              <h2 className={styles['statistic-percent']}>85%</h2>
              <p className={styles['statistic-name']}>
                Game <br /> Deisgn
              </p>{' '}
            </div>
            <div className={styles['statistic-item']}>
              <h2 className={styles['statistic-percent']}>100%</h2>
              <p className={styles['statistic-name']}>
                Web <br /> Development
              </p>{' '}
            </div>
          </div>
        </div>
        <img className={styles['img']} src={ourCapabilitiesImage} alt="" />
      </div>
      <div className={styles['bottom-part']}>
        <div className={styles['bottom-part-element']}>
          <img className={styles['bottom-part-img']} src={expertsImg} alt="" />{' '}
          <h2 className={styles['element-count']}>120</h2>{' '}
          <h4 className={styles['element-title']}>Top Experts</h4>
        </div>
        <img className={styles['separator']} src={rectangle} alt="" />
        <div className={styles['bottom-part-element']}>
          <img
            className={styles['bottom-part-img']}
            src={strategiesImg}
            alt=""
          />{' '}
          <h2 className={styles['element-count']}>500</h2>{' '}
          <h4 className={styles['element-title']}>Strategies</h4>
        </div>
        <img className={styles['separator']} src={rectangle} alt="" />
        <div className={styles['bottom-part-element']}>
          <img className={styles['bottom-part-img']} src={resultsImg} alt="" />{' '}
          <h2 className={styles['element-count']}>347</h2>{' '}
          <h4 className={styles['element-title']}>Great Results</h4>
        </div>
        <img className={styles['separator']} src={rectangle} alt="" />
        <div className={styles['bottom-part-element']}>
          <img className={styles['bottom-part-img']} src={rankingImg} alt="" />{' '}
          <h2 className={styles['element-count']}>120</h2>{' '}
          <h4 className={styles['element-title']}>Hight Rankings</h4>
        </div>
      </div>
    </div>
  )
}
