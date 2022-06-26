import React from 'react';
import { func, bool } from 'prop-types';

function LoginButton(props) {
  const { onClick, disabled } = props;

  return (
    <button
			className="login__button"
			type="button"
      disabled={ disabled }
      onClick={ onClick }
    >
      Log In
    </button>
  )
}

LoginButton.propTypes = {
  onClick: func.isRequired,
  disabled: bool.isRequired,
}

export default LoginButton;
