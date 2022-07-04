import React from 'react';
import { BsCalendarPlusFill } from 'react-icons/bs';

function Title() {
	return (
		<h1 className="newTask__pageTitle">
			<BsCalendarPlusFill />
			{' '}
			New Task
		</h1>
	);
}

export default Title;
