import React from 'react';
import { shape } from 'prop-types';

function Day(props) {
	const { day, date } = props;

	const isOff = date.format('MMMM') === day.format('MMMM') ? '' : 'calendar__dayOff';
	const formattedDay = day.format('D');

	return (
		<div
			className={ `calendar__day ${isOff}` }
		>
			{ formattedDay }
		</div>
	);
}

Day.propTypes = {
	day: shape({}).isRequired,
	date: shape({}).isRequired,
};

export default Day;
