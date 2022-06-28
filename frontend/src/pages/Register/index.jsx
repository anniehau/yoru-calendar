import React from 'react';
import { RegisterMain } from '../../components/Main';
import requireAuth from '../../hooks/requireAuth';
import '../../css/Register.css';

function Register() {
	requireAuth('/calendar', '/register');
	return (
		<>
			<RegisterMain />
		</>
	);
}

export default Register;
