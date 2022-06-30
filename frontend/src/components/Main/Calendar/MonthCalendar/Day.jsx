import React from 'react';
import { shape, func } from 'prop-types';
import verifyTaskAmount from '../../../../hooks/verifyTaskAmount';

function Day(props) {
	const { day, date, onClick } = props;
	const taskAmount = verifyTaskAmount(day);

	const isOff = date.format('MMMM') === day.format('MMMM') ? '' : 'calendar__dayOff';
	const canClick = isOff === '';
	const formattedDay = day.format('D');

	const renderTaskAmount = (
		taskAmount > 0 &&
		<span className="day__tasks">
			{ taskAmount }
		</span>
	);

	return (
		<div
			className={ `calendar__day ${isOff}` }
			onClick={ () => { canClick && onClick(day); } }
		>
			{ renderTaskAmount }
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
