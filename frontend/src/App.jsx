import React from 'react';
import PageRoutes from './routes';
import AppProvider from './context/AppProvider';

function App () {
	return (
		<AppProvider>
			<PageRoutes />
		</AppProvider>
	);
}

export default App;
