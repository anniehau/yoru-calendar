import React from 'react';
import { useNavigate } from 'react-router-dom';

function ToLoginButton() {
	const navigate = useNavigate();

	const goToRegister = () => navigate('/login');

  return (
    <button
			type="button"
			onClick={ goToRegister }
    >
      Log in instead
    </button>
  )
}

export default ToLoginButton;
