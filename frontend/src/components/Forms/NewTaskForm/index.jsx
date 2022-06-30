import React, { useContext, useEffect, useState } from 'react';
import { shape, func } from 'prop-types';
import Title from './Title';
import TitleInput from './TitleInput';
import DescriptionTextArea from './DescriptionTextArea';
import DatetimeInput from './DatetimeInput';
import DurationSelect from './DurationSelect';
import SubmitTaskButton from './SubmitTaskButton';
import { format, create, storage } from '../../../helpers';
import AppContext from '../../../context/AppContext';
import '../../../css/Calendar/NewTaskForm.css';

const INITIAL_FORM = {
	title: '',
	description: '',
	datetime: '',
	duration: '',
};

function NewTaskForm(props) {
	const { date, goToTaskTable } = props;
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
		const datetime = new Date(event[0]);
		if (!datetime) return false;
		setForm((s) => ({ ...s, datetime }));
	};
	
	// Sets datetime to current datetime
	const prepareForm = () => {
		if (!date) return false;
		const formatted = date.format().replace('Z', '');
		const datetime = new Date(formatted);
		setForm({
			...INITIAL_FORM,
			datetime,
		});
	};

	// Submits task to database
	const submitNewTask = async () => {
		const token = storage.user.token.get();
		const payload = create.payload.to.post.task({
			token,
			body: {
				...form,
				datetime: format.task.datetime.normal(form.datetime),
			}
		});
		const result = await create.fetch.includes.body({ url: 'tasks', payload });
		if (!result.success) console.log(result.data);
		reloadApi();
		goToTaskTable();
	};

	useEffect(() => prepareForm(), []);

	return (
		<form className="form__newTask">
			<Title />
			<TitleInput title={ form.title } onChange={ setFormValue } />
			<DescriptionTextArea description={ form.description } onChange={ setFormValue } />
			<DatetimeInput datetime={ form.datetime } onChange={ setDatetime } />
			<DurationSelect duration={ form.duration } onChange={ setFormValue } />
			<SubmitTaskButton onClick={ submitNewTask } />
		</form>
	);
}

NewTaskForm.propTypes = {
	date: shape({}).isRequired,
	goToTaskTable: func.isRequired,
};

export default NewTaskForm;
