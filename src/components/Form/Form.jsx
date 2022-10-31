import React from 'react';
import { Formik } from 'formik';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './Form.module.scss';
import '../../index.scss';

import { ReactComponent as Error } from '../../assets/images/icon-error.svg';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, 'Name must be 20 characters or less.')
        .required('First Name cannot be empty'),
      lastName: Yup.string()
        .max(20, 'Name must be 20 characters or less.')
        .required('Last Name cannot be empty'),
      email: Yup.string().email('Looks like this is not an email').required('Email is required'),
      password: Yup.string()
        .max(20, 'Password must be 20 characters or less.')
        .required('Password cannot be empty'),
    }),

    onSubmit: (values) => {
      console.log('form submitted');
      console.log(values);
      // router.push({ pathname: '/success', query: values });
    },
  });

  return (
    <section className="  h-screen items-center flex justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white flex rounded-lg w-1/2 font-latoRegular">
        <div className="flex-1 text-gray-700  p-20">
          <div className="mt-6 ">
            {/* First Name input field */}
            <div className={styles.fname}>
              <input
                className={styles.input}
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                autoComplete="off"
                style={{
                  border:
                    formik.touched.firstName && formik.errors.firstName
                      ? `2px solid #FF7979`
                      : `1px solid #dedede`,
                  marginBottom: formik.errors.firstName ? `6px` : `20px`,
                  color: formik.errors.firstName ? `#FF7979` : `hsl(249, 10%, 26%)`,
                }}
              />
              {formik.touched.firstName && formik.errors.firstName && <Error />}
              <span
                className={`${
                  formik.errors.firstName ? styles.span_active : styles.span_disabled
                } `}>
                {formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ''}
              </span>
            </div>

            {/* Last Name input field */}
            <div className={styles.lName}>
              <input
                className={styles.input}
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                autoComplete="off"
                style={{
                  border:
                    formik.touched.lastName && formik.errors.lastName
                      ? `2px solid #FF7979`
                      : `1px solid #dedede`,
                  marginBottom: formik.errors.lastName ? `6px` : `20px`,
                  color: formik.errors.lastName ? `#FF7979` : `hsl(249, 10%, 26%)`,
                }}
              />
              {formik.touched.lastName && formik.errors.lastName && <Error />}
              <span
                className={`${
                  formik.errors.lastName ? styles.span_active : styles.span_disabled
                } `}>
                {formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ''}
              </span>
            </div>
            {/* Email input field */}
            <div className={styles.email}>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                autoComplete="off"
                style={{
                  border:
                    formik.touched.email && formik.errors.email
                      ? `2px solid #FF7979`
                      : `1px solid #dedede`,
                  marginBottom: formik.errors.email ? `6px` : `20px`,
                  color: formik.errors.email ? `#FF7979` : `hsl(249, 10%, 26%)`,
                }}
              />
              {formik.touched.email && formik.errors.email && <Error />}
              <span
                className={`${formik.errors.email ? styles.span_active : styles.span_disabled} `}>
                {formik.touched.email && formik.errors.email ? formik.errors.email : ''}
              </span>
            </div>
            {/* Password input field */}
            <div className={styles.password}>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                autoComplete="off"
                style={{
                  border:
                    formik.touched.password && formik.errors.password
                      ? `2px solid #FF7979`
                      : `1px solid #dedede`,
                  marginBottom: formik.errors.password ? `6px` : `20px`,
                }}
              />
              {formik.touched.password && formik.errors.password && <Error />}
              <span
                className={`${
                  formik.errors.password ? styles.span_active : styles.span_disabled
                } `}>
                {formik.touched.password && formik.errors.password ? formik.errors.password : ''}
              </span>
            </div>
            <button
              type="submit"
              className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full">
              CLAIM YOUR FREE TRIAL
            </button>
            {/* Terms of service*/}
            <p className={styles.terms}>
              By clicking the button, you are agreeing to our <span>Terms and Services</span>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
