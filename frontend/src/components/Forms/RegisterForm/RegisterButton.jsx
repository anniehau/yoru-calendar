import React from 'react';
import { func, bool } from 'prop-types';

function RegisterButton(props) {
  const { onClick, disabled } = props;

  return (
    <button
			type="button"
      disabled={ disabled }
      onClick={ onClick }
    >
      Register
    </button>
  )
}

RegisterButton.propTypes = {
  onClick: func.isRequired,
  disabled: bool.isRequired,
}

export default RegisterButton;
