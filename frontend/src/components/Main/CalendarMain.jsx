import React from 'react';
import LoginTitle from '../Text/LoginTitle';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';

function LoginMain() {
	return (
		<main className="login__center">
			<LoginTitle />
			<LoginForm />
		</main>
	);
}

export default LoginMain;
