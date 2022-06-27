import React from 'react';
import RegisterTitle from './RegisterTitle';
import { RegisterForm } from '../../../components/Forms';

function RegisterMain() {
	return (
		<main className="register__center">
			<RegisterTitle />
			<RegisterForm />
		</main>
	);
}

export default RegisterMain;
