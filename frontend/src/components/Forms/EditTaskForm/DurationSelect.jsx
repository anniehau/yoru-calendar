import React from 'react';
import { string, func } from 'prop-types';

function DurationSelect(props) {
	const { duration, onChange } = props;
	const durations = ['30m', '60m', '90m', '120m+'];
	
	const options = (
		durations.map((d) => (
			<option key={ d }>
				{ d }
			</option>
		))
	);

	return (
		<div className="">
			<select
				value={ duration }
				onChange={ (e) => onChange(e, 'duration') }
			>
				{ options }
			</select>
		</div>
	);
}

DurationSelect.propTypes = {
	duration: string.isRequired,
	onChange: func.isRequired,
};

export default DurationSelect;
