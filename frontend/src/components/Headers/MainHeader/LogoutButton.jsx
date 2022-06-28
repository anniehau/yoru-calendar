import React, { useContext } from 'react';
import { storage } from '../../../helpers';
import { BsBoxArrowRight } from 'react-icons/bs';
import AppContext from '../../../context/AppContext';

function LogoutButton() {
	const { reloadApi } = useContext(AppContext);

	const submitLogout = () => {
		storage.user.remove();
		reloadApi();
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