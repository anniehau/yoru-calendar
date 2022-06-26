import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { create, format, storage, validate } from '../../../helpers';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';
import ToRegisterLink from './ToRegisterLink';
import ErrorText from './ErrorText';

const INITIAL_FORM = { email: '', password: '' };

function LoginForm() {
	const navigate = useNavigate();

	// State
  const [form, setForm] = useState(INITIAL_FORM);
	const [error, setError] = useState('');

  // Disables LoginButton if form values are invalid
  const validateForm = () => {
		const { valid, message } = validate.login.form(form);
		if (!valid) {
			setError(message);
			return false;
		};
		setError('');
		return true;
  }
  
  // Sets form values in state. Requires field to be "username" or "password"
  // to change the respsective fields.
  const setFormValue = (event, field) => {
    const { value } = event.target;
    setForm((s) => ({ ...s, [field]: value }));
  };

	// Submits Login and shows error if it's returned
  const submitLogin = async () => {
		const formIsValid = validateForm();
		if (!formIsValid) return false;
    const payload = create.payload.to.login(form);
		const result = await create.fetch.includes.body({ url: 'login', payload });
		if (!result.success) return setError(result.data);
		const user = format.user.obj(result.data)
		storage.user.set(user);
		navigate('/calendar');
  };

  return (
    <form>
      <EmailInput email={ form.email } onChange={ setFormValue } />
      <PasswordInput password={ form.password } onChange={ setFormValue } />
      <ErrorText error={ error } />
			<LoginButton onClick={ submitLogin } />
			<ToRegisterLink />
    </form>
  )
};

export default LoginForm;
