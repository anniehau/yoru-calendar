import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import create from '../../../../helpers/create';
import Week from './Week';
import MonthHeader from './MonthHeader';
import WeekHeader from './WeekHeader';
import AppContext from '../../../../context/AppContext';
import '../../../../css/Calendar/MonthCalendar.css';

function MonthCalendar() {
	const [calendar, setCalendar] = useState([]);
	const [date, setDate] = useState(moment());
	const { state } = useContext(AppContext);

	useEffect(() => {
		setCalendar(create.calendar.month.format(date));
	}, [date]);

	const currMonthName = () => date.format('MMMM');
	const currYear = () => date.format('YYYY');
	const advanceMonth = () => setDate(date.clone().add(1, 'months'));
	const retreatMonth = () => setDate(date.clone().subtract(1, 'months'));

	const main = (
		calendar.length > 0 && calendar.map((week) => (
			<Week
				key={ calendar.indexOf(week) }
				week={ week }
				date={ date }
			/>
		))
	);

	return (
		!state.apiIsLoading && state.isLoggedIn &&
		<main className="calendar__month">
			<MonthHeader
				month={ currMonthName() }
				year={ currYear() }
				advanceMonth={ advanceMonth }
				retreatMonth={ retreatMonth }
			/>
			<WeekHeader />
			{ main }
		</main>
	);
}

export default MonthCalendar;
