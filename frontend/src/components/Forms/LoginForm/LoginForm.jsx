import React, { useState } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';
import create from '../../../helpers/create';

const INITIAL_FORM = { email: '', password: '' };

function LoginForm() {
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

  const submitLogin = async (event) => {
    event.preventDefault();
    const payload = create.payload.to.login(form);
		const result = await create.fetch.includes.body({ url: 'login', payload });
		if (!result.success) return null;
  };

  return (
    <form>
      <EmailInput email={ form.email } onChange={ setFormValue } />
      <PasswordInput password={ form.password } onChange={ setFormValue } />
      <LoginButton onClick={ submitLogin } disabled={ trueIfValuesAreInvalid() } />
    </form>
  )
}

export default LoginForm;
