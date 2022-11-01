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
                className={` ${
                  formik.touched.firstName && formik.errors.firstName
                    ? styles.input_bad
                    : styles.input_normal
                } `}
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                autoComplete="off"
                style={{
                  marginBottom:
                    formik.touched.firstName && formik.errors.firstName ? `7px` : `20px`,
                  color:
                    formik.touched.firstName && formik.errors.firstName
                      ? `#FF7979`
                      : `hsl(249, 10%, 26%)`,
                }}
              />
              {formik.touched.firstName && formik.errors.firstName && <Error />}
              <span
                className={`${
                  formik.touched.firstName && formik.errors.firstName
                    ? styles.span_active
                    : styles.span_disabled
                } `}>
                {formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ''}
              </span>
            </div>

            {/* Last Name input field */}
            <div className={styles.lName}>
              <input
                className={` ${
                  formik.touched.lastName && formik.errors.lastName
                    ? styles.input_bad
                    : styles.input_normal
                } `}
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                autoComplete="off"
                style={{
                  marginBottom: formik.touched.lastName && formik.errors.lastName ? `7px` : `20px`,
                  color:
                    formik.touched.lastName && formik.errors.lastName
                      ? `#FF7979`
                      : `hsl(249, 10%, 26%)`,
                }}
              />
              {formik.touched.lastName && formik.errors.lastName && <Error />}
              <span
                className={`${
                  formik.touched.lastName && formik.errors.lastName
                    ? styles.span_active
                    : styles.span_disabled
                } `}>
                {formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ''}
              </span>
            </div>
            {/* Email input field */}
            <div className={styles.email}>
              <input
                className={` ${
                  formik.touched.email && formik.errors.email
                    ? styles.input_bad
                    : styles.input_normal
                } `}
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                autoComplete="off"
                style={{
                  marginBottom: formik.touched.email && formik.errors.email ? `7px` : `20px`,
                  color:
                    formik.touched.email && formik.errors.email ? `#FF7979` : `hsl(249, 10%, 26%)`,
                }}
              />
              {formik.touched.email && formik.errors.email && <Error />}
              <span
                className={`${
                  formik.touched.email && formik.errors.email
                    ? styles.span_active
                    : styles.span_disabled
                } `}>
                {formik.touched.email && formik.errors.email ? formik.errors.email : ''}
              </span>
            </div>
            {/* Password input field */}
            <div className={styles.password}>
              <input
                className={` ${
                  formik.touched.password && formik.errors.password
                    ? styles.input_bad
                    : styles.input_normal
                } `}
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                autoComplete="off"
                style={{
                  marginBottom: formik.touched.password && formik.errors.password ? `7px` : `20px`,
                }}
              />
              {formik.touched.password && formik.errors.password && <Error />}
              <span
                className={`${
                  formik.touched.password && formik.errors.password
                    ? styles.span_active
                    : styles.span_disabled
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
