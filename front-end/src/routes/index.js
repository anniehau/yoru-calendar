import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ValidateLogin from './validate/ValidateLogin';

function PageRoutes() {
  return (
    <Routes>
      <Route to="/" element={ <ValidateLogin /> } />
    </Routes>
  )
}

export default PageRoutes;
