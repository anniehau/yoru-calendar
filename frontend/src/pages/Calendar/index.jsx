import React from 'react';
import { MainHeader } from '../../components/Headers';
import { MonthCalendar } from '../../components/Main/Calendar';
import '../../css/Main.css';

function Calendar() {
	return (
		<>
			<MainHeader />
			<MonthCalendar />
		</>
	);
}

export default Calendar;
