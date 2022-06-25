import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import create from '../../../helpers/create';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';
import ErrorText from './ErrorText';

const INITIAL_FORM = { email: '', password: '', error: '' };

function LoginForm() {
	const navigate = useNavigate();

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

	// Submits Login and 
  const submitLogin = async () => {
    const payload = create.payload.to.login(form);
		const result = await create.fetch.includes.body({ url: 'login', payload });
		if (!result.success) return setForm((s) => ({ ...s, error: result.data.error }))
		navigate('/calendar');
  };

  return (
    <form>
      <EmailInput email={ form.email } onChange={ setFormValue } />
      <PasswordInput password={ form.password } onChange={ setFormValue } />
      <LoginButton onClick={ submitLogin } disabled={ trueIfValuesAreInvalid() } />
			<ErrorText error={ form.error } />
    </form>
  )
};

export default LoginForm;
