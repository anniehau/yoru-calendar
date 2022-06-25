import React from 'react';
import { string, func } from 'prop-types';

function EmailInput(props) {
  const { email, onChange } = props;

  return (
    <input
      type="email"
      value={ email }
      placeholder="Email"
			autoComplete='on'
      onChange={ (e) => onChange(e, 'email') }
    />
  )
}

EmailInput.propTypes = {
  email: string.isRequired,
  onChange: func.isRequired,
}

export default EmailInput;
