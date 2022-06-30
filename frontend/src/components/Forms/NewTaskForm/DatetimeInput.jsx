import React from 'react';
import { instanceOf, func } from 'prop-types';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';

function DatetimeInput(props) {
	const { datetime, onChange } = props;
	
	const options = {
		mode: 'single',
		enableTime: true,
		time_24hr: true,
		dateFormat: 'Y-m-d, H:i'
	};

	return (
		<div className="newTask__datetime">
			<label className="label__name">
				<span className="content__name">Date & Time</span>
			</label>
			<Flatpickr
				date-enable-time="true"
				value={ datetime }
				options={ options }
				onChange={ (e) => onChange(e, 'datetime') }
			/>
		</div>
	);
}

DatetimeInput.propTypes = {
	datetime: instanceOf(Date).isRequired,
	onChange: func.isRequired,
};

export default DatetimeInput;
