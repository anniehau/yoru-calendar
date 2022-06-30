import React from 'react';
import { string, func } from 'prop-types';

function DescriptionTextArea(props) {
	const { description, onChange } = props;

	return (
		<div className="newTask__description">
			<label className="label__name">
				<span className="content__name">Description</span>
				{' '}
				<span className="content__optional">(optional)</span>
			</label>
			<textarea
				type="text"
				value={ description }
				onChange={ (e) => onChange(e, 'description') }
				required
			/>
		</div>
	);
}

DescriptionTextArea.propTypes = {
	description: string.isRequired,
	onChange: func.isRequired,
};

export default DescriptionTextArea;
