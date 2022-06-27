import React, { useEffect, useState } from 'react';
import create from '../../../../helpers/create';
import Week from './Week';

function MonthCalendar() {
	const [calendar, setCalendar] = useState([]);

	useEffect(() => {
		setCalendar(create.calendar.month.format());
	}, []);

	const main = (
		calendar.length > 0 && calendar.map((week) => (
			<Week key={ calendar.indexOf(week) } week={ week } />
		))
	);

	return (
		<main className="calendar__center">
			{ main }
		</main>
	);
}

export default MonthCalendar;
