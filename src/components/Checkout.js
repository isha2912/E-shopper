import React from 'react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import Validation from './UserValidation';
import './Checkout.scss';

const Checkout = () => (
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
      onSubmit={(fields) => {
        console.log(fields);
      }}
    >
      <Form className="form">
        <Field className="form-firstname" name="firstName" type="text" placeholder="First Name" />
        <ErrorMessage
          name="firstName"
          component="div"
          className="invalid-feedback"
        //   style={{ color: 'red', fontWeight: 'bold' }}
        />
        <Field className="form-lastname" name="lastName" type="text" placeholder="Last Name" />
        <ErrorMessage
          name="lastName"
          component="div"
          className="invalid-feedback"
        //   style={{ color: 'red', fontWeight: 'bold' }}
        />
        <Field className="form-email" name="email" type="email" placeholder="Email" />
        <ErrorMessage
          name="email"
          component="div"
          className="invalid-feedback"
        //   style={{ color: 'red', fontWeight: 'bold' }}
        />
        <Field className="form-number" name="phone" type="number" placeholder="Phone number" />
        <ErrorMessage
          name="phone"
          component="div"
          className="invalid-feedback"
        //   style={{ color: 'red', fontWeight: 'bold' }}
        />
        <Field className="form-address" name="address" type="text" placeholder="Address" />
        <ErrorMessage
          name="address"
          component="div"
          className="invalid-feedback"
        //   style={{ color: 'red', fontWeight: 'bold' }}
        />
        <button className="form-submit" type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);
export default Checkout;
