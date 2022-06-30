import React, { useEffect, useState } from 'react';
import { shape, func } from 'prop-types';
import Title from './Title';
import TitleInput from './TitleInput';
import DescriptionTextArea from './DescriptionTextArea';
import DatetimeInput from './DatetimeInput';
import DurationSelect from './DurationSelect';
import SubmitEditButton from './SubmitEditButton';
import { format } from '../../../helpers';
import '../../../css/Calendar/EditTaskForm.css';

const INITIAL_FORM = {
	title: '',
	description: '',
	datetime: '',
	duration: '',
};

function EditTaskForm(props) {
	const { task } = props;

	// States
	const [form, setForm] = useState(INITIAL_FORM);

	// Sets form values in state. Requires field to be "username" or "password"
	// to change the respsective fields.
	const setFormValue = (event, field) => {
		const { value } = event.target;
		setForm((s) => ({ ...s, [field]: value }));
	};

	// Sets form based on task currently being edited
	const prepareForm = () => {
		if (!task) return false;
		setForm({
			title: task.title,
			description: task.description,
			datetime: format.task.datetime(task.datetime),
			duration: task.duration,
		});
	};

	useEffect(() => {
		prepareForm();
	}, [task]);

	return (
		<form className="form__editTask">
			<Title />
			<TitleInput title={ form.title } onChange={ setFormValue } />
			<DescriptionTextArea description={ form.description } onChange={ setFormValue } />
			<DatetimeInput datetime={ form.datetime } onChange={ setFormValue } />
			<DurationSelect duration={ form.duration } onChange={ setFormValue } />
			<SubmitEditButton />
		</form>
	);
}

EditTaskForm.propTypes = {
	task: shape({}).isRequired,
	goToTaskTable: func.isRequired,
};

export default EditTaskForm;
