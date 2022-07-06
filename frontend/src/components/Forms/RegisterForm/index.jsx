import React, { useContext, useState } from 'react';
import { create, format, storage, validate } from '../../../helpers';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import RegisterButton from './RegisterButton';
import ToLoginLink from './ToLoginLink';
import ErrorText from './ErrorText';
import AppContext from '../../../context/AppContext';

const INITIAL_FORM = { name: '', email: '', password: '' };

function RegisterForm() {
	const { reloadApi } = useContext(AppContext);

	// State
	const [form, setForm] = useState(INITIAL_FORM);
	const [error, setError] = useState('');

	// Disables RegisterButton if form values are invalid
	const validateForm = () => {
		const { valid, message } = validate.register.form(form);
		if (!valid) {
			setError(message);
			return false;
		}
		setError('');
		return true;
	};
  
	// Sets form values in state. Requires field to be "name", "email" or "password"
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
		console.log(result);
		if (!result.success) return setError(result.data);
		const user = format.user.obj(result.data);
		storage.user.set(user);
		reloadApi();
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
	);
}

export default RegisterForm;
