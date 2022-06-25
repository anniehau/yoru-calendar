import React, { useState } from 'react';
import { func } from 'prop-types';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';

const INITIAL_FORM = { email: '', password: '' };

function LoginForm(props) {
	const { submitLogin } = props;

	// State
  const [form, setForm] = useState(INITIAL_FORM);

  // Disables LoginButton if form values are invalid
  const trueIfValuesAreInvalid = () => {
    const emailIsInvalid = form.email.length < 3;
    const passwordIsInvalid = form.password.length < 6;
    if (emailIsInvalid || passwordIsInvalid) return true;
    return false;
  }
  
  // Sets form values in state. Requires field to be "username" or "password"
  // to change the respsective fields.
  const setFormValue = (event, field) => {
    const { value } = event.target;
    setForm((s) => ({ ...s, [field]: value }));
  };

  return (
    <form>
      <EmailInput email={ form.email } onChange={ setFormValue } />
      <PasswordInput password={ form.password } onChange={ setFormValue } />
      <LoginButton onClick={ submitLogin } disabled={ trueIfValuesAreInvalid() } />
    </form>
  )
};

LoginForm.propTypes = {
	submitLogin: func.isRequired,
};

export default LoginForm;
