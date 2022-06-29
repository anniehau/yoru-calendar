import React, { useContext } from 'react';
import { number } from 'prop-types';
import { BsPencilFill } from 'react-icons/bs';
import AppContext from '../../../context/AppContext';

function EditTaskButton(props) {
	const { id } = props;
	const { tasks, setTasks } = useContext(AppContext);

	const editTask = () => {
		const filtered = tasks.filter((task) => task.id !== id);
		setTasks(filtered);
	};

	return (
		<td>
			<button
				className="table__editTaskBtn"
				onClick={ editTask }
			>
				<BsPencilFill />
			</button>
		</td>
	);
}

EditTaskButton.propTypes = {
	id: number.isRequired,
};

export default EditTaskButton;
