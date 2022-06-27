import React from 'react';
import create from '../../../../helpers/create';

function WeekHeader() {
	const weeks = create.calendar.weeks();
	
	return (
		<header className="calendar__headerWeek">
			{ weeks.map((week) => (
				<div
					key={ week.name }
					className="week"
				>
					{ week.letter }
				</div>
			)) }
		</header>
	);
}

export default WeekHeader;
