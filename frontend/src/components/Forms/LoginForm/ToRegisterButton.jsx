import React from 'react';
import { useNavigate } from 'react-router-dom';

function ToRegisterButton() {
	const navigate = useNavigate();

	const goToRegister = () => navigate('/register');

  return (
    <button
			type="button"
			onClick={ goToRegister }
    >
      Create new account
    </button>
  )
}

export default ToRegisterButton;
