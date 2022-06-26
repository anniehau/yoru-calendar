import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ValidateLogin from './validate/ValidateLogin';
import { Login, Register, Calendar } from '../pages';

function PageRoutes() {
	return (
		<Routes>
			<Route path="/" element={ <ValidateLogin /> } />
			<Route exact path="/login" element={ <Login /> } />
			<Route exact path="/register" element={ <Register /> } />
			<Route exact path="/calendar" element={ <Calendar /> } />
		</Routes>
	);
}

export default PageRoutes;
