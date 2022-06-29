import React from 'react';
import { shape, func } from 'prop-types';
import Title from './Title';
import CloseBtn from './CloseBtn';

function MenuHeader(props) {
	const { date, closeMenu } = props;
	return (
		<header className="menu__header">
			<Title date={ date } />
			<CloseBtn onClick={ closeMenu } />
		</header>
	);
}

MenuHeader.propTypes = {
	date: shape({}).isRequired,
	closeMenu: func.isRequired,
};

export default MenuHeader;
