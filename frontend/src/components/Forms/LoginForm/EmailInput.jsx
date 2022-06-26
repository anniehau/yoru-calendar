import React from 'react';
import { string, func } from 'prop-types';

function EmailInput(props) {
  const { email, onChange } = props;

  return (
    <div className="login__textField">
			<input
				type="email"
				value={ email }
				autoComplete='on'
				onChange={ (e) => onChange(e, 'email') }
				required
			/>
			<span />
			<label>Email</label>
		</div>
  )
}

EmailInput.propTypes = {
  email: string.isRequired,
  onChange: func.isRequired,
}

export default EmailInput;
