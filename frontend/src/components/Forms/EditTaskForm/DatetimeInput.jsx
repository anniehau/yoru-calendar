import React from 'react';
import { string, func } from 'prop-types';

function DatetimeInput(props) {
	const { datetime, onChange } = props;

	return (
		<div className="">
			<input
				type="datetime-local"
				value={ datetime }
				onChange={ (e) => onChange(e, 'datetime') }
				required
			/>
			<span />
			<label>Date & Time</label>
		</div>
	);
}

DatetimeInput.propTypes = {
	datetime: string.isRequired,
	onChange: func.isRequired,
};

export default DatetimeInput;
