import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { create, format, storage } from '../../../helpers';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';
import ToRegisterButton from './ToRegisterButton';
import ErrorText from './ErrorText';

const INITIAL_FORM = { email: '', password: '' };

function LoginForm() {
	const navigate = useNavigate();

	// State
  const [form, setForm] = useState(INITIAL_FORM);
	const [error, setError] = useState('');

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

	// Submits Login and shows error if it's returned
  const submitLogin = async () => {
    const payload = create.payload.to.login(form);
		const result = await create.fetch.includes.body({ url: 'login', payload });
		if (!result.success) return setError(result.data.error);
		const user = format.user.obj(result.data)
		storage.user.set(user);
		navigate('/calendar');
  };

  return (
    <form>
      <EmailInput email={ form.email } onChange={ setFormValue } />
      <PasswordInput password={ form.password } onChange={ setFormValue } />
      <LoginButton onClick={ submitLogin } disabled={ trueIfValuesAreInvalid() } />
			<ToRegisterButton />
			<ErrorText error={ error } />
    </form>
  )
};

export default LoginForm;
