import styles from './AboutUs.module.css'
import homeCheckbox from '../../../../assets/icons/home-about-us-checkbox.svg'
import homeImage from '../../../../assets/images/home-about-us-image.svg'

export function AboutUs() {
  return (
    <div className={styles['about-us']}>
      <img className={styles['img']} src={homeImage} alt="" />
      <div className={styles['text-part']}>
        <p className={styles['subtitle']}>About Us ____</p>
        <h2 className={styles['title']}>Grow Your Business With Our Agency</h2>
        <p className={styles['text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
          arcu in tincidunt sed imperdiet etiam fames. Tincidunt augue risus
          mattis eget sem habitant id ultrices augue. Sit rhoncus .
        </p>
        <div className={styles['checkboxes']}>
          <div className={styles['checkbox']}>
            {' '}
            <img
              className={styles['checkbox-icon']}
              src={homeCheckbox}
              alt=""
            />
            <p className={styles['checkbox-text']}>Innovative website design</p>
          </div>
          <div className={styles['checkbox']}>
            {' '}
            <img
              className={styles['checkbox-icon']}
              src={homeCheckbox}
              alt=""
            />
            <p className={styles['checkbox-text']}>
              {' '}
              UI/UX design with global trends
            </p>
          </div>
          <div className={styles['checkbox']}>
            {' '}
            <img
              className={styles['checkbox-icon']}
              src={homeCheckbox}
              alt=""
            />{' '}
            <p className={styles['checkbox-text']}>
              Web and email hosting service
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
