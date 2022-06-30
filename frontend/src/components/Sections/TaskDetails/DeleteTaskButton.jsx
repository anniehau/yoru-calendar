import React, { useContext } from 'react';
import { number } from 'prop-types';
import { BsTrashFill } from 'react-icons/bs';
import AppContext from '../../../context/AppContext';
import { create, storage } from '../../../helpers';

function DeleteTaskButton(props) {
	const { id } = props;
	const { reloadApi } = useContext(AppContext);

	const deleteTask = async () => {
		const token = storage.user.token.get();
		const payload = create.payload.to.remove.task(token);
		const result = await create.fetch.includes.params({ url: 'tasks', payload, params: id });
		if (!result.success) console.log(result.data.error);
		reloadApi();
	};

	return (
		<button
			className="taskDetails__deleteTaskBtn"
			onClick={ deleteTask }
		>
			<BsTrashFill />
			{' '}
			Delete
		</button>
	);
}

DeleteTaskButton.propTypes = {
	id: number.isRequired,
};

export default DeleteTaskButton;
