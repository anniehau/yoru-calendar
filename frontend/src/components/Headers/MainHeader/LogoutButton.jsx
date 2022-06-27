import React from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../../helpers';

function LogoutButton() {
	const navigate = useNavigate();

	const submitLogout = () => {
		storage.user.remove();
		navigate('/login');
	};

	return (
		<button
			className="header__logoutBtn"
			onClick={ submitLogout }
		>
			Log Out
		</button>
	);
}

export default LogoutButton;