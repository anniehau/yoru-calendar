import React, { useState } from 'react';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';

const INITIAL_FORM = { username: '', password: '' };

function LoginForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  
  const setFormValue = (event, field) => {
    const { value } = event.target;
    setForm((s) => ({ ...s, [field]: value }))
  };

  const submitLogin = () => console.log('Login!');

  return (
    <form>
      <UsernameInput username={ form.username } onChange={ setFormValue } />
      <PasswordInput password={ form.password } onChange={ setFormValue } />
      <LoginButton onClick={ submitLogin } />
    </form>
  )
}

export default LoginForm;
