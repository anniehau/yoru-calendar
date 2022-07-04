import React, { useEffect, useState } from 'react';
import { shape, func } from 'prop-types';
import verifyTaskAmount from '../../../../hooks/verifyTaskAmount';
import { validate } from '../../../../helpers';

const INITIAL_STATE = {
	monthIsOff: '',
	canClick: true,
	formattedDay: '',
};

function Day(props) {
	const { day, date, onClick } = props;
	const [dayState, setDayState] = useState(INITIAL_STATE);
	const taskAmount = verifyTaskAmount(day);

	const getDayData = () => {
		const dayMonthIsCorrectMonth = validate.day.month(day, date);
		setDayState({
			monthIsOff: !dayMonthIsCorrectMonth && 'calendar__dayOff', 
			canClick: dayMonthIsCorrectMonth,
			formattedDay: day.format('D')
		});
	};

	useEffect(() => getDayData(), [day]);

	const renderTaskAmount = (
		taskAmount > 0 &&
		<span className="day__tasks">
			{ taskAmount }
		</span>
	);

	return (
		<div
			className={ `calendar__day ${dayState.monthIsOff}` }
			onClick={ () => { dayState.canClick && onClick(day); } }
		>
			{ renderTaskAmount }
			{ dayState.formattedDay }
		</div>
	);
}

Day.propTypes = {
	day: shape({}).isRequired,
	date: shape({}).isRequired,
	onClick: func.isRequired,
};

export default Day;
