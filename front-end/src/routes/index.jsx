import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ValidateLogin from './validate/ValidateLogin';
import { Login } from '../pages';

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <ValidateLogin /> } />
      <Route exact path="/login" element={ <Login /> } />
    </Routes>
  )
}

export default PageRoutes;
