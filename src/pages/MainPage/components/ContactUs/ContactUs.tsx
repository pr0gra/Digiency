import styles from './ContactUs.module.css'
import mailIcon from '../../../../assets/icons/contact-us-mail-icon.svg'
import phoneIcon from '../../../../assets/icons/contact-us-phone-icon.svg'
import locationIcon from '../../../../assets/icons/contact-us-location-icon.svg'
import { ContactUsForm } from '../ContactUsForm/ContactUsForm'
import MapComponent from '../Map/MapComponent'
import gradeImg1 from '../../../../assets/images/contact-us-grade-1.svg'
import gradeImg2 from '../../../../assets/images/contact-us-grade-2.svg'
import gradeImg3 from '../../../../assets/images/contact-us-grade-3.svg'
import gradeImg4 from '../../../../assets/images/contact-us-grade-4.svg'

export function ContactUs() {
  return (
    <div id="contact-us" className={styles['contact-us']}>
      <div className={styles['contact-us-text-part']}>
        <p className={styles['contact-us-text-part-subtitle']}>Contact Us</p>
        <h2 className={styles['contact-us-text-part-title']}>
          Feel <span>Free to Contact</span> With Us
        </h2>
      </div>
      <div className={styles['contact-us-contact-ways']}>
        <div className={styles['contact-us-contact-way-container']}>
          <div className={styles['contact-us-contact-way-top-part']}>
            <img
              className={styles['contact-us-contact-way-img']}
              src={mailIcon}
              alt=""
            />
            <h2 className={styles['contact-us-contact-way-title']}>
              <span className={styles['contact-us-contact-way-span']}>
                Drop a line
              </span>
              <br /> Mail Us
            </h2>
          </div>
          <div className={styles['contact-us-contact-way-bottom-part']}>
            <p className={styles['contact-us-contact-way-bottom-part-text']}>
              Support87@gmial.com
            </p>
            <p className={styles['contact-us-contact-way-bottom-part-text']}>
              ijkuiu874@gmial.com
            </p>
          </div>
        </div>
        <div className={styles['contact-us-contact-way-container']}>
          <div className={styles['contact-us-contact-way-top-part']}>
            <img
              className={styles['contact-us-contact-way-img']}
              src={phoneIcon}
              alt=""
            />
            <h2 className={styles['contact-us-contact-way-title']}>
              <span className={styles['contact-us-contact-way-span']}>
                24/7 Service
              </span>
              <br /> Call Us
            </h2>
          </div>
          <div className={styles['contact-us-contact-way-bottom-part']}>
            <p className={styles['contact-us-contact-way-bottom-part-text']}>
              +880 265 98745 <span>(Toll free)</span>
            </p>
            <p className={styles['contact-us-contact-way-bottom-part-text']}>
              +895 855 85589
            </p>
          </div>
        </div>
        <div className={styles['contact-us-contact-way-container']}>
          <div className={styles['contact-us-contact-way-top-part']}>
            <img
              className={styles['contact-us-contact-way-img']}
              src={locationIcon}
              alt=""
            />
            <h2 className={styles['contact-us-contact-way-title']}>
              <span className={styles['contact-us-contact-way-span']}>
                Location
              </span>
              <br /> Visit Us
            </h2>
          </div>
          <div className={styles['contact-us-contact-way-bottom-part']}>
            <p className={styles['contact-us-contact-way-bottom-part-text']}>
              158 ralegih sit, <br /> houston, yk 5896,uk
            </p>
          </div>
        </div>
      </div>
      <ContactUsForm />
      <MapComponent />
      <div className={styles['grades-array']}>
        <img className={styles['grades-array-img']} src={gradeImg1} alt="" />
        <img className={styles['grades-array-img']} src={gradeImg2} alt="" />
        <img className={styles['grades-array-img']} src={gradeImg3} alt="" />
        <img className={styles['grades-array-img']} src={gradeImg4} alt="" />
      </div>
    </div>
  )
}
