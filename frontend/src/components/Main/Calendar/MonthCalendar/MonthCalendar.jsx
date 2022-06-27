import React, { useEffect, useState } from 'react';
import moment from 'moment';
import create from '../../../../helpers/create';
import Week from './Week';
import MonthHeader from './MonthHeader';
import '../../../../css/Calendar/MonthCalendar.css';

function MonthCalendar() {
	const [calendar, setCalendar] = useState([]);

	useEffect(() => {
		setCalendar(create.calendar.month.format());
	}, []);

	const date = moment();
	const currMonthName = () => date.format('MMMM');
	const currYear = () => date.format('YYYY');

	const main = (
		calendar.length > 0 && calendar.map((week) => (
			<Week key={ calendar.indexOf(week) } week={ week } />
		))
	);

	return (
		<main className="calendar__month">
			<MonthHeader month={ currMonthName() } year={ currYear() } />
			{ main }
		</main>
	);
}

export default MonthCalendar;
