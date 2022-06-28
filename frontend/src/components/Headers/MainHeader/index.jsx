import React, { useContext } from 'react';
import CalendarButton from './CalendarButton';
import ProfileButton from './ProfileButton';
import LogoutButton from './LogoutButton';
import AppContext from '../../../context/AppContext';

function WeekHeader() {
	const { state } = useContext(AppContext);
	return (
		!state.apiIsLoading && state.isLoggedIn &&
		<header className="main__header">
			<div className="header__left">
				<CalendarButton />
			</div>
			<div className="header__right">
				<ProfileButton />
				<LogoutButton />
			</div>
		</header>
	);
}

export default WeekHeader;
