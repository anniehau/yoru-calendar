import React, { useState, useEffect } from 'react';
import { storage } from '../../../helpers';

function NameText() {
	const [name, setName] = useState('');
 
	useEffect(() => { 
		const user = storage.user.get();
		setName(user.name);
	}, []);

	return (
		<div className="header__name">
			{ name }
		</div>
	);
}

export default NameText;
