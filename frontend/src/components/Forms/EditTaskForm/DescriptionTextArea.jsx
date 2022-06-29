import React from 'react';
import { string, func } from 'prop-types';

function DescriptionTextArea(props) {
	const { description, onChange } = props;

	return (
		<div className="">
			<textarea
				type="text"
				value={ description }
				onChange={ (e) => onChange(e, 'description') }
				required
			/>
			<span />
			<label>Description</label>
		</div>
	);
}

DescriptionTextArea.propTypes = {
	description: string.isRequired,
	onChange: func.isRequired,
};

export default DescriptionTextArea;
