import React from 'react';
import { MainHeader } from '../../components/Headers';
import { MonthCalendar } from '../../components/Main/Calendar';
import requireAuth from '../../hooks/requireAuth';
import '../../css/Main.css';

function Calendar() {
	requireAuth();
	return (
		<>
			<MainHeader />
			<MonthCalendar />
		</>
	);
}

export default Calendar;
