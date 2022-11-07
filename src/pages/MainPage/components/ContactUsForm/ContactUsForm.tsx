import styles from './ContactUsForm.module.css'
import messageImg from '../../../../assets/images/contact-us-img.svg'
import { useFormik } from 'formik'
import { Button } from '../../../../components/Button/Button'
import { basicSchema } from '../../../../../schemas/index'
import cx from 'classnames'
import MaskedInput from 'react-text-mask'

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

      <form onSubmit={handleSubmit} className={styles['form-part']} action="">
        <h2 className={cx(styles['text-part'], styles['text-part-desktop'])}>
          Send Your
          <span> Message To Us</span>
        </h2>
        <input
          className={styles['input']}
          type="text"
          id="name"
          placeholder="Name"
          onChange={handleChange}
          value={values.name}
        />
        {errors.name && touched.name && <p>{errors.name}</p>}
        <input
          className={styles['input']}
          type="text"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
        />
        {errors.email && touched.email && <p>{errors.email}</p>}

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
        {errors.subject && touched.subject && <p>{errors.subject}</p>}

        <MaskedInput
          mask={[
            '+',
            /\d/,
            '(',
            /[1-9]/,
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          guide={true}
          type="text"
          className={styles['input']}
          id="mobile"
          placeholder="Mobile No"
          onChange={handleChange}
        />
        {errors.mobile && touched.mobile && <p>{errors.mobile}</p>}

        <input
          className={cx(styles['input'], styles['input-desktop'])}
          type="text"
          id="message"
          placeholder="Send Message"
          onChange={handleChange}
          value={values.message}
        />

        {errors.message && touched.message && <p>{errors.message}</p>}

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
