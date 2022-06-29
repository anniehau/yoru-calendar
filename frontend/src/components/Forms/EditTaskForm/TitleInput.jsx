import React from 'react';
import { string, func } from 'prop-types';

function TitleInput(props) {
	const { title, onChange } = props;

	return (
		<div className="editTask__title">
			<input
				type="text"
				value={ title }
				onChange={ (e) => onChange(e, 'title') }
				required
			/>
			<label className="label__name">
				<span className="content__name">Title</span>
			</label>
		</div>
	);
}

TitleInput.propTypes = {
	title: string.isRequired,
	onChange: func.isRequired,
};

export default TitleInput;
