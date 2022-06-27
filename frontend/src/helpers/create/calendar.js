const monthFunctions = {
	format: (date) => {
		const startDay = date.clone().startOf('month').startOf('week');
		const endDay = date.clone().endOf('month').endOf('week');
		const day = startDay.clone().subtract(1, 'day');

		const calendar = [];
		
		while (day.isBefore(endDay, 'day')) {
			const week = [];
			
			for (let i = 0; i < 7; i += 1) {
				week.push(day.add(1, 'day').clone());
			}
			
			calendar.push(week);
		}

		return calendar;
	}
};

const weeks = () => {
	return [
		{ name: 'Sunday', letter: 'S' },
		{ name: 'Monday', letter: 'M' },
		{ name: 'Tuesday', letter: 'T' },
		{ name: 'Wednesday', letter: 'W' },
		{ name: 'Thursday', letter: 'T' },
		{ name: 'Friday', letter: 'F' },
		{ name: 'Saturday', letter: 'S' },
	];
};

const calendar = { month: monthFunctions, weeks };

export default calendar;
