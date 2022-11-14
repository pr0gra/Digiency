import styles from './ContactUsForm.module.css'
import messageImg from '../../../../assets/images/contact-us-img.svg'
import { useFormik } from 'formik'
import { Button } from '../../../../components/Button/Button'
import { basicSchema } from '../../../../../schemas/index'
import cx from 'classnames'
import InputMask from 'react-input-mask'

export function ContactUsForm() {
  const { values, errors, touched, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        subject: '',
        message: '',
        mobile: '',
      },
      onSubmit: values => {
        console.log(values)
      },
      validationSchema: basicSchema,
    })

  return (
    <div className={styles['contact-us-form']}>
      <img className={styles['img']} src={messageImg} alt="" />

      <form onSubmit={handleSubmit} className={styles['form-part']}>
        <h2 className={cx(styles['text-part'], styles['text-part-desktop'])}>
          Send Your
          <span> Message To Us</span>
        </h2>
        <div className={styles['input-top-part']}>
          <div className={styles['input-container']}>
            <input
              className={styles['input']}
              type="text"
              id="name"
              placeholder="Name"
              onChange={handleChange}
              value={values.name}
            />{' '}
            <div className={styles['error-container']}>
              {errors.name && touched.name && (
                <p className={styles['error-text']}>{errors.name}</p>
              )}{' '}
            </div>
            <input
              className={styles['input']}
              type="text"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              value={values.email}
            />
            <div className={styles['error-container']}>
              {errors.email && touched.email && (
                <p className={styles['error-text']}>{errors.email}</p>
              )}
            </div>
          </div>

          <div className={styles['input-container']}>
            <select
              className={cx(styles['input'], styles['input-select'])}
              onChange={handleChange}
              value={values.subject}
              name="subject"
            >
              <option className={styles['option']} value="">
                Subject
              </option>
              <option className={styles['option']}>UI/UX Design</option>
              <option className={styles['option']}>Web Development</option>
            </select>
            <div className={styles['error-container']}>
              {errors.subject && touched.subject && (
                <p className={styles['error-text']}>{errors.subject}</p>
              )}{' '}
            </div>

            <InputMask
              className={styles['input']}
              type="text"
              mask="+7-(999)-999-9999"
              id="mobile"
              placeholder="Mobile No"
              value={values.mobile}
              onChange={handleChange}
            ></InputMask>
            <div className={styles['error-container']}>
              {errors.mobile && touched.mobile && (
                <p className={styles['error-text']}>{errors.mobile}</p>
              )}
            </div>
          </div>
        </div>

        <textarea
          className={cx(styles['input'], styles['input-desktop'])}
          type="text-area"
          id="message"
          placeholder="Send Message"
          onChange={handleChange}
          value={values.message}
        ></textarea>
        <div className={styles['error-container']}>
          {errors.message && touched.message && (
            <p className={styles['error-text']}>{errors.message}</p>
          )}
        </div>

        <Button
          typeof="submit"
          style={{ width: '190px' }}
          buttonType="button-primary"
        >
          {!isSubmitting ? 'Send Message' : 'Message is sent'}
        </Button>
      </form>
    </div>
  )
}
