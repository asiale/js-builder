import React, { Component } from 'react';
import { FormTitle } from '../formTitle';
import { reduxForm, Field } from 'react-form';
import { FormInput, FormButton } from '../formFields';
import TextLink from "../textLink";

class SignupForm extends Component {
  render () {
    return (
    <form className='sign-up-form'>
      <formTitle className='sign-up-form__title' text='New User'/>

      <Field
      className="sign-up-form__fullname"
      placeholder='Enter Your Full Name'
      component={FormInput}
      name="fullname"
      type="text"
      title="Full Name"
      component={FormInput}
      />

      <Field
      className="sign-up-form__unit"
      placeholder='Enter Unit #'
      component={FormInput}
      name="unit"
      type="text"
      title="Unit #"
      component={FormInput}
      />

      <Field
      className="sign-up-form__email"
      placeholder='Enter Email'
      component={FormInput}
      name="email"
      type="email"
      title="Email"
      component={FormInput}
      />

      <Field
      className="sign-up-form__password"
      placeholder='Enter Password'
      name="Password"
      type="password"
      title="Password"
      component={FormInput}
      />

      <Field
      className="sign-up-form__create-account"
      name="createaccount"
      type="submit"
      title="Create Account"
      component={FormButton}
      />


      <div className='sign-up-form__text-links'>
          <TextLink to='/signin' text='Already Registered? Login'/>
      </div>

      <
    </form>
  );
  }
}
SignupForm = reduxForm
form: 'signup'

}) (SignupForm);

export default SignupForm;
