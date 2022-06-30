import React, { useContext, useEffect, useState } from 'react';
import { shape, func } from 'prop-types';
import Title from './Title';
import TitleInput from './TitleInput';
import DescriptionTextArea from './DescriptionTextArea';
import DatetimeInput from './DatetimeInput';
import DurationSelect from './DurationSelect';
import SubmitEditButton from './SubmitEditButton';
import { format, create, storage } from '../../../helpers';
import AppContext from '../../../context/AppContext';
import '../../../css/Calendar/EditTaskForm.css';

const INITIAL_FORM = {
	title: '',
	description: '',
	datetime: '',
	duration: '',
};

function EditTaskForm(props) {
	const { task, goToTaskTable } = props;
	const { reloadApi } = useContext(AppContext);

	// States
	const [form, setForm] = useState(INITIAL_FORM);

	// Sets form values in state. Requires field to be "username" or "password"
	// to change the respsective fields.
	const setFormValue = (event, field) => {
		const { value } = event.target;
		setForm((s) => ({ ...s, [field]: value }));
	};

	// Sets datetime value to form state
	const setDatetime = (event) => {
		const datetime = format.task.datetime.normal(event[0]);
		if (!datetime) return false;
		setForm((s) => ({ ...s, datetime }));
	};

	// Sets form based on task currently being edited
	const prepareForm = () => {
		if (!task) return false;
		setForm({
			title: task.title,
			description: task.description,
			datetime: format.task.datetime.normal(task.datetime),
			duration: task.duration,
		});
	};

	// Submits edit to database with new ata
	const submitEditTask = async () => {
		const token = storage.user.token.get();
		const payload = create.payload.to.put.task({ token, body: form });
		const result = await create.fetch.includes.params({ url: 'tasks', payload, params: task.id });
		if (!result.success) console.log(result.data);
		reloadApi();
		goToTaskTable();
	};

	useEffect(() => {
		prepareForm();
	}, [task]);

	return (
		<form className="form__editTask">
			<Title />
			<TitleInput title={ form.title } onChange={ setFormValue } />
			<DescriptionTextArea description={ form.description } onChange={ setFormValue } />
			<DatetimeInput datetime={ form.datetime } onChange={ setDatetime } />
			<DurationSelect duration={ form.duration } onChange={ setFormValue } />
			<SubmitEditButton onClick={ submitEditTask } />
		</form>
	);
}

EditTaskForm.propTypes = {
	task: shape({}).isRequired,
	goToTaskTable: func.isRequired,
};

export default EditTaskForm;
