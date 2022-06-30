import React from 'react';
import { BsCalendar2EventFill } from 'react-icons/bs';

function Title() {
	return (
		<h1 className="taskDetails__title">
			<BsCalendar2EventFill />
			{' '}
			Task Details
		</h1>
	);
}

export default Title;
