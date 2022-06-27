import React from 'react';
import { string } from 'prop-types';

function MonthHeader(props) {
	const { month, year } = props;
	return (
		<header className="calendar__headerMonth">
			{ month }
			{' '}
			{ year }
		</header>
	);
}

MonthHeader.propTypes = {
	month: string.isRequired,
	year: string.isRequired,
};

export default MonthHeader;
