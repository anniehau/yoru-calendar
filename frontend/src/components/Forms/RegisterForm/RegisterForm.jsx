import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import create from '../../../helpers/create';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import RegisterButton from './RegisterButton';
import ToLoginButton from './ToLoginButton';
import ErrorText from './ErrorText';

const INITIAL_FORM = { name: '', email: '', password: '' };

function RegisterForm() {
	const navigate = useNavigate();

	// State
  const [form, setForm] = useState(INITIAL_FORM);
	const [error, setError] = useState('');

  // Disables RegisterButton if form values are invalid
  const trueIfValuesAreInvalid = () => {
		const nameIsInvalid = form.name.length < 3;
    const emailIsInvalid = form.email.length < 3;
    const passwordIsInvalid = form.password.length < 6;
    if (nameIsInvalid || emailIsInvalid || passwordIsInvalid) return true;
    return false;
  }
  
  // Sets form values in state. Requires field to be "username" or "password"
  // to change the respsective fields.
  const setFormValue = (event, field) => {
    const { value } = event.target;
    setForm((s) => ({ ...s, [field]: value }));
  };

	// Submits fetch and shows error if it's returned
  const submitRegister = async () => {
    const payload = create.payload.to.register(form);
		const result = await create.fetch.includes.body({ url: 'register', payload });
		if (!result.success) return setError(result.data.error)
		navigate('/calendar');
  };

  return (
    <form>
			<NameInput name={ form.name } onChange={ setFormValue } />
      <EmailInput email={ form.email } onChange={ setFormValue } />
      <PasswordInput password={ form.password } onChange={ setFormValue } />
      <RegisterButton onClick={ submitRegister } disabled={ trueIfValuesAreInvalid() } />
			<ToLoginButton />
			<ErrorText error={ error } />
    </form>
  )
};

export default RegisterForm;
