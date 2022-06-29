import React from 'react';
import { string, func } from 'prop-types';
import Title from './Title';
import CloseBtn from './CloseBtn';

function MenuHeader(props) {
	const { month, year, onClick } = props;
	return (
		<header>
			<Title month={ month } year={ year } />
			<CloseBtn onClick={ onClick } />
		</header>
	);
}

MenuHeader.propTypes = {
	month: string.isRequired,
	year: string.isRequired,
	onClick: func.isRequired,
};

export default MenuHeader;
