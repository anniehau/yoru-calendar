import React from 'react';
import { shape, func } from 'prop-types';
import Title from './Title';
import CloseBtn from './CloseBtn';
import verifyTaskAmount from '../../../hooks/verifyTaskAmount';

function MenuHeader(props) {
	const { date, closeMenu } = props;
	const taskAmount = verifyTaskAmount(date);

	const renderTaskAmount = (
		<span className="menu__headerTasks">
			{ taskAmount }
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
	closeMenu: func.isRequired,
};

export default MenuHeader;
