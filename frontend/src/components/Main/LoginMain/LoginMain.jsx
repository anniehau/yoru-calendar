import React from 'react';
import LoginTitle from './LoginTitle';
import { LoginForm } from '../../../components/Forms';

function LoginMain() {
	return (
		<main className="login__center">
			<LoginTitle />
			<LoginForm />
		</main>
	);
}

export default LoginMain;
