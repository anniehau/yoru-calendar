import React from 'react';
import { string, func } from 'prop-types';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';

function DatetimeInput(props) {
	const { datetime, onChange } = props;

	const options = {
		mode: 'single',
		enableTime: true,
		altInput: true,
		altFormat: 'Y-m-d, H:i K',
		dateFormat: 'Z',
	};

	return (
		<div className="editTask__datetime">
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
	datetime: string.isRequired,
	onChange: func.isRequired,
};

export default DatetimeInput;
