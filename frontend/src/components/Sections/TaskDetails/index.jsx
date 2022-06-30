import React from 'react';
import { shape } from 'prop-types';
import Title from './Title';
import Description from './Description';
import Datetime from './Datetime';
import Duration from './Duration';

function TaskDetails(props) {
	const { task } = props;
	return (
		<>
			<Title title={ task.title } />
			<Description description={ task.description } />
			<Datetime datetime={ task.datetime } />
			<Duration duration={ task.duration } />
		</>
	);
}

TaskDetails.propTypes = {
	task: shape({}).isRequired,
};

export default TaskDetails;
