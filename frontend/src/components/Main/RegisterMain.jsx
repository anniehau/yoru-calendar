import React from 'react';
import RegisterTitle from '../Text/RegisterTitle';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';

function RegisterMain() {
  return (
    <main className="register__center">
			<RegisterTitle />
			<RegisterForm />
    </main>
  )
}

export default RegisterMain;
