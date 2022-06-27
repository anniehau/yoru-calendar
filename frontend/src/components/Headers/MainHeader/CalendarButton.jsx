import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCalendarFill } from 'react-icons/bs';

function CalendarButton() {
	const navigate = useNavigate();

	const goToCalendarPage = () => navigate('/calendar');

	return (
		<button
			type="button"
			className="header__calendarBtn"
			onClick={ goToCalendarPage }
		>
			<BsCalendarFill
				className="calendarBtn__icon"
				size={ 22 }
			/>
		</button>
	);
}

export default CalendarButton;