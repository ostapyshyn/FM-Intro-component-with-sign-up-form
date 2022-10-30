import React from 'react';
import { Formik } from 'formik';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './Form.module.scss';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      country: 'United Kingdom',
      terms: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, 'Name must be 20 characters or less.')
        .required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
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
            {/* Name input field */}
            <div className="pb-4">
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* Email input field */}
            <div className="pb-4">
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                type="email"
                name="email"
                placeholder="Enter your email address"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
            </div>

            {/* Terms of service*/}

            <button
              type="submit"
              className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full">
              CLAIM YOUR FREE TRIAL
            </button>
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
