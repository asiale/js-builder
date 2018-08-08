import React, { Component } from 'react';
import { FormTitle } from '../formTitle';
import { reduxForm, Field } from 'react-form';
import { FormInput, FormButton } from '../formFields';
import TextLink from "../textLink";

class SigninForm extends Component {
  render () {
    return (
    <form className='sign-in-form'>
      <formTitle className='sign-in-form__title' text='Login'/>
      <Field
      className='sign-in-form__email'
      placeholder='Enter Email'
      component={FormInput}
      name="email"
      type="email"
      title="Email"
      component={FormInput}
      />

      <Field
      className="sign-in-form__password"
      placeholder='Enter Password'
      name="Password"
      type="password"
      title="Password"
      component={FormInput}
      />

      <Field
      className="sign-in-form__login"
      name="login"
      type="button"
      title="Submit"
      component={FormButton}
      />

      
      <div className='sign-in-form__text-links'>
          <TextLink to='/forgot' text='Forgot Password'/>
          <TextLink to='/signup' text='Not a Member? Register here'/>
      </div>

      <
    </form>
  );
  }
}
SigninForm = reduxForm
form: 'signin'

}) (SigninForm);

export default SigninForm;
