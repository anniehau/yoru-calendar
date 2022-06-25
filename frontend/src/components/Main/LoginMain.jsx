import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import create from '../../../helpers/create';

function LoginMain() {
	const navigate = useNavigate();

  const submitLogin = async (form) => {
    const payload = create.payload.to.login(form);
		const result = await create.fetch.includes.body({ url: 'login', payload });
		if (!result.success) return null;
		navigate('/calendar');
  };

  return (
    <main>
			<LoginForm submitLogin={ submitLogin } />
    </main>
  )
}

export default LoginMain;
