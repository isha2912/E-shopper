/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import Validation from './UserValidation';
import './Checkout.scss';

const Checkout = ({ onSubmitForm }) => {
  const [message, setMessage] = useState();
  return (
    <div className="checkout-form">
      <h1>
        {/* Form */}
      </h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
        }}
        validationSchema={Validation}
      // eslint-disable-next-line no-unused-vars
        onSubmit={async (fields) => {
          setMessage('Thankyou for Shpping with us');
        }}
      >
        <Form className="form">
          <Field className="form-firstname" name="firstName" type="text" placeholder="First Name" />
          <ErrorMessage
            name="firstName"
            component="div"
            className="invalid-feedback"
          />
          <Field className="form-lastname" name="lastName" type="text" placeholder="Last Name" />
          <ErrorMessage
            name="lastName"
            component="div"
            className="invalid-feedback"
          />
          <Field className="form-email" name="email" type="email" placeholder="Email" />
          <ErrorMessage
            name="email"
            component="div"
            className="invalid-feedback"
          />
          <Field className="form-number" name="phone" type="number" placeholder="Phone number" />
          <ErrorMessage
            name="phone"
            component="div"
            className="invalid-feedback"
          />
          <Field className="form-address" name="address" type="text" placeholder="Address" />
          <ErrorMessage
            name="address"
            component="div"
            className="invalid-feedback"
          />
          <button className="form-submit" type="submit">Submit</button>
          <h6>
            {' '}
            {message}
            {' '}
          </h6>
        </Form>
      </Formik>

    </div>
  );
};
export default Checkout;
