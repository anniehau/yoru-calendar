import React from 'react';
import CalendarButton from './CalendarButton';
import ProfileButton from './ProfileButton';
import LogoutButton from './LogoutButton';

function WeekHeader() {
	return (
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
