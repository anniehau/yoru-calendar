import React from 'react';
import { func, bool } from 'prop-types';

function LoginButton(props) {
  const { onClick, disabled } = props;

  return (
    <button
      onClick={ onClick }
      disabled={ disabled }
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
