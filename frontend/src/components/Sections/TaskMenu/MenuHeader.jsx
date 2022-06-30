import React from 'react';
import { shape, number, func } from 'prop-types';
import Title from './Title';
import CloseBtn from './CloseBtn';

function MenuHeader(props) {
	const { date, taskAmount, closeMenu } = props;
	const renderTaskAmount = (
		<span className="menu__headerTasks">
			{ taskAmount || 0 }
		</span>
	);
	return (
		<header className="menu__header">
			<Title date={ date } />
			{ renderTaskAmount }
			<CloseBtn onClick={ closeMenu } />
		</header>
	);
}

MenuHeader.propTypes = {
	date: shape({}).isRequired,
	taskAmount: number.isRequired,
	closeMenu: func.isRequired,
};

export default MenuHeader;
