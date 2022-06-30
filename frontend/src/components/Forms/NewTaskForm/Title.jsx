import React from 'react';
import { BsPencilFill } from 'react-icons/bs';

function Title() {
	return (
		<h1 className="newTask__pageTitle">
			<BsPencilFill />
			{' '}
			Edit Task
		</h1>
	);
}

export default Title;
