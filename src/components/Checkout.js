/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Checkout.css';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      formValues: {
        name: '',
        address: '',
        phoneNo: '',
        email: '',
      },
      formErrors: {
        name: '',
        address: '',
        phoneNo: '',
        email: '',
      },
      formValidity: {
        name: false,
        address: false,
        phoneNo: false,
        email: false,
      },

    };
  }

  // handleChange=(event) => {
  //   if (event.target.name === 'name' &&
  //  event.target.value.length > 6) { console.log(event.target.value); }
  //   this.setState(({ [event.target.name]: event.target.value }));
  // }
  handleChange=({ target }) => {
    const { formValues } = this.state;
    formValues[target.name] = target.value;
    this.setState({ formValues });
    this.handleValidation(target);
  }

  handleClick=() => {
    const { formValues } = this.state;
    this.setState({ formValues });
    const newState = { formValues };
    console.log(newState);
  }

  handleValidation= (target) => {
    const { name, value } = target;
    const fieldValidationErrors = this.state.formErrors;
    const validity = this.state.formValidity;
    const isEmail = name === 'email';
    const isPhoneNo = name === 'phoneNo';
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    validity[name] = value.length > 0;
    fieldValidationErrors[name] = validity[name] ? '' : `${name} is required`;
    if (validity[name]) {
      if (isEmail) {
        validity[name] = emailTest.test(value);
        fieldValidationErrors[name] = validity[name] ? '' : `${name} should be an valid`;
      }
      if (isPhoneNo) {
        validity[name] = value.length === 9;
        fieldValidationErrors[name] = validity[name] ? '' : `${name} should be an valid`;
      }
    }
    this.setState({
      formErrors: fieldValidationErrors,
      formValidity: validity,
    });
  }

  render() {
    const { formValues, formErrors } = this.state;
    return (
      <div className="checkout-form">
        <form>
          <p>Name:</p>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
          <div className="invalid-feedback">{formErrors.name}</div>
          <p>Address:</p>
          <input type="text" name="address" onChange={this.handleChange} value={this.state.address} />
          <div className="invalid-feedback">{formErrors.address}</div>
          <p>Phone no:</p>
          <input type="number" name="phoneNo" placeholder="enter phone no" onChange={this.handleChange} value={this.state.phoneNo} />
          <div className="invalid-feedback">{formErrors.phoneNo}</div>
          <p>email:</p>
          <input type="email" name="email" placeholder="enter email" onChange={this.handleChange} value={formValues.email} />
          <div className="invalid-feedback">{formErrors.email}</div>
          <input type="button" value="Submit" onClick={this.handleClick} />

        </form>
      </div>
    );
  }
}

export default withRouter(Checkout);
