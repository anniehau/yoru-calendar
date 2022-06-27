import React from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../../helpers';
import { BsBoxArrowRight } from 'react-icons/bs';

function LogoutButton() {
	const navigate = useNavigate();

	const submitLogout = () => {
		storage.user.remove();
		navigate('/login');
	};

	return (
		<div>
			<button
				type="button"
				className="header__logoutBtn"
				onClick={ submitLogout }
			>
				Log Out
				{' '}
				<BsBoxArrowRight className="logoutBtn__icon" size={ 15 } />
			</button>
		</div>
	);
}

export default LogoutButton;