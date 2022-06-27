import React from 'react';
import NameText from './NameText';
import LogoutButton from './LogoutButton';

function WeekHeader() {
	return (
		<header className="main__header">
			<div className="header__right">

			</div>
			<div className="header__right">
				<NameText />
				<LogoutButton />
			</div>
		</header>
	);
}

export default WeekHeader;
