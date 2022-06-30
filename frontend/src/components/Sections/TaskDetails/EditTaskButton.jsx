import React from 'react';
import { shape, func } from 'prop-types';
import { BsPencilFill } from 'react-icons/bs';

function EditTaskButton(props) {
	const { task, onClick } = props;
	return (
		<button
			className="taskDetails__editTaskBtn"
			onClick={ (e) => onClick(e, task) }
		>
			<BsPencilFill />
			{' '}
			Edit
		</button>
	);
}

EditTaskButton.propTypes = {
	task: shape({}).isRequired,
	onClick: func.isRequired,
};

export default EditTaskButton;
