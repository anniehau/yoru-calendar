import React from 'react';
import { func } from 'prop-types';

function LoginButton(props) {
  const { onClick } = props;

  return (
    <button
			className="login__button"
			type="button"
      onClick={ onClick }
    >
      Log In
    </button>
  )
}

LoginButton.propTypes = {
  onClick: func.isRequired,
}

export default LoginButton;
