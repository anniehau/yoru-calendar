import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { create, format, storage } from '../../../helpers';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import RegisterButton from './RegisterButton';
import ToLoginLink from './ToLoginLink';
import ErrorText from './ErrorText';

const INITIAL_FORM = { name: '', email: '', password: '' };

function RegisterForm() {
	const navigate = useNavigate();

	// State
  const [form, setForm] = useState(INITIAL_FORM);
	const [error, setError] = useState('');

  // Disables RegisterButton if form values are invalid
  const validateForm = () => {
		const nameIsFilled = form.name !== '';
		const nameIsValid = form.name.length >= 3;
		const emailIsFilled = form.email !== '';
    const emailIsValid = form.email.length >= 3;
		const passwordIsFilled = form.password !== '';
    const passwordIsValid = form.password.length >= 6;
		switch (true) {
			case (!nameIsFilled):
				setError('Name must be filled!');
				return false;
			case (!nameIsValid):
				setError('Name must be at least 3 characters long!');
				return false;
			case (!emailIsFilled):
				setError('Email must be filled!');
				return false;
			case (!emailIsValid):
				setError('Email is invalid!');
				return false;
			case (!passwordIsFilled):
				setError('Password must be filled!')
				return false;
			case (!passwordIsValid):
				setError('Password must be at least 6 characters long!')
				return false;
			default:
				return true;
		}
  }
  
  // Sets form values in state. Requires field to be "username" or "password"
  // to change the respsective fields.
  const setFormValue = (event, field) => {
    const { value } = event.target;
    setForm((s) => ({ ...s, [field]: value }));
  };

	// Submits fetch and shows error if it's returned
  const submitRegister = async () => {
		const formIsValid = validateForm();
		if (!formIsValid) return false;
    const payload = create.payload.to.register(form);
		const result = await create.fetch.includes.body({ url: 'register', payload });
		if (!result.success) return setError(result.data.error)
		const user = format.user.obj(result.data)
		storage.user.set(user);
		navigate('/calendar');
  };

  return (
    <form>
			<NameInput name={ form.name } onChange={ setFormValue } />
      <EmailInput email={ form.email } onChange={ setFormValue } />
      <PasswordInput password={ form.password } onChange={ setFormValue } />
			<ErrorText error={ error } />
      <RegisterButton onClick={ submitRegister } />
			<ToLoginLink />
    </form>
  )
};

export default RegisterForm;
