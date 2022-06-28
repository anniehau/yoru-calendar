import React from 'react';
import { LoginMain } from '../../components/Main';
import requireAuth from '../../hooks/requireAuth';
import '../../css/Login.css';

function Login() {
	requireAuth('/calendar');
	return (
		<>
			<LoginMain />
		</>
	);
}

export default Login;
