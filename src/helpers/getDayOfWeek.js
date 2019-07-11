export default date => {
	const splittedDate = date.split('-');
	const newDate = new Date(splittedDate[0], splittedDate[1] - 1, splittedDate[2]);
	return weekdays(newDate.getDay());
};

const weekdays = day => {
	const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const result = weekdays[day];
	if (result) {
		return result;
	}
	throw new Error(`No weekday found for index: ${day}`);
};
