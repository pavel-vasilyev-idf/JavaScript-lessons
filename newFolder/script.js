
window.addEventListener('DOMContentLoaded', () => {


	const date = new Date(),
		days = [
			'Воскресенье',
			'Понедельник',
			'Вторник',
			'Среда',
			'Четверг',
			'Пятница',
			'Суббота'
		],
		hours = date.getHours(),
		day = days[date.getDay()],
		time = date.toLocaleTimeString('en'),
		newDate = new Date(new Date().getFullYear() + 1, 0, 1);

	console.log(Math.ceil((newDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24));

	const greeting = document.createElement('div'),
		dyaOfWeek = document.createElement('div'),
		currentTime = document.createElement('div'),
		newYearDays = document.createElement('div');

	const countDayToNewYear = num => {
		const textVariant = [' день', ' дня', ' дней'];
		const firstVariant = num % 100,
			n2 = num % 10;
		return firstVariant > 4 && firstVariant < 21 ? num + textVariant[2] :
			n2 === 1 ? num + textVariant[0] :
				n2 > 1 && n2 < 5 ? num + textVariant[1] :
					num + textVariant[2];
	};

	greeting.textContent = hours < 5 || hours > 22 ? 'Доброй ночи' :
		hours < 10 ? 'Доброе утро' :
			hours < 17 ? 'Добрый день' :
				'Добрый вечер';
	dyaOfWeek.textContent = 'Сегодня: ' + day;
	currentTime.textContent = 'Текущее время: ' + time;
	newYearDays.textContent = 'До нового года осталось ' +
    countDayToNewYear(Math.ceil((newDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24));

	document.body.append(greeting, dyaOfWeek, currentTime, newYearDays);
});
