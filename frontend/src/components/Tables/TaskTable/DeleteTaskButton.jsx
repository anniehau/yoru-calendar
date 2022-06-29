import React, { useContext } from 'react';
import { number } from 'prop-types';
import { BsTrashFill } from 'react-icons/bs';
import AppContext from '../../../context/AppContext';

function DeleteTaskButton(props) {
	const { id } = props;
	const { tasks, setTasks } = useContext(AppContext);

	const deleteTask = () => {
		const filtered = tasks.filter((task) => task.id !== id);
		setTasks(filtered);
	};

	return (
		<td>
			<button
				className="table__deleteTaskBtn"
				onClick={ deleteTask }
			>
				<BsTrashFill />
			</button>
		</td>
	);
}

DeleteTaskButton.propTypes = {
	id: number.isRequired,
};

export default DeleteTaskButton;
