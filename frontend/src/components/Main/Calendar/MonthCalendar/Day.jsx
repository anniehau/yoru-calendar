import React from 'react';
import { shape, func } from 'prop-types';

function Day(props) {
	const { day, date, onClick } = props;

	const isOff = date.format('MMMM') === day.format('MMMM') ? '' : 'calendar__dayOff';
	const formattedDay = day.format('D');

	return (
		<div
			className={ `calendar__day ${isOff}` }
			onClick={ () => onClick(day) }
		>
			{ formattedDay }
		</div>
	);
}

Day.propTypes = {
	day: shape({}).isRequired,
	date: shape({}).isRequired,
	onClick: func.isRequired,
};

export default Day;
