import moment from 'moment';

const monthFunctions = {
	format: () => {
		const value = moment();
		const startDay = value.clone().startOf('month').startOf('week');
		const endDay = value.clone().endOf('month').endOf('week');
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

const calendar = { month: monthFunctions };

export default calendar;
