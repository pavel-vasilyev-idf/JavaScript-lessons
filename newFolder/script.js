
window.addEventListener('DOMContentLoaded', () => {


	function counterTime(toNewYar) {
		let clear = 0;

		const daysOfWeekArray = [
			'Воскресенье',
			'Понедельник',
			'Вторник',
			'Среда',
			'Четверг',
			'Пятница',
			'Суббота'
		];



		function getTimeRemaining() {
			const date = new Date();
			const year = date.getFullYear();
			const day = date.getDay();
			const hour = date.getHours();
			const minutes = date.getMinutes();
			const seconds = date.getSeconds();
			const newYear = new Date(toNewYar).getTime();
			const dateNow = new Date().getTime();
			const timeRemaining = Math.floor((newYear - dateNow) / 1000 / 60 / 60 / 24);
			return {
				date,
				year,
				day,
				hour,
				minutes,
				seconds,
				timeRemaining

			};
		}

		const greeting = document.createElement('div');
		const dyaOfWeek = document.createElement('div');
		const currentTime = document.createElement('div');
		const newYearDays = document.createElement('div');

		function updateClock() {
			const timer = getTimeRemaining();
			const newHour = timer.hour < 10 ? `0${timer.hour}` : timer.hour;
			const newMinutes = timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes;
			const newSeconds = timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds;
			const newPeriodOfDay = timer.hour <= 12 ? `AM` : `PM`;

			const changeNewYarOfDays = day => {
				const textVariant = [' день', ' дня', ' дней'];
				const n1 = day % 100,
					n2 = day % 10;
				return n1 > 4 && n1 < 21 ? day + textVariant[2] :
					n2 === 1 ? day + textVariant[0] :
						n2 > 1 && n2 < 5 ? day + textVariant[1] :
							day + textVariant[2];
			};
			const newYearDate = changeNewYarOfDays(timer.timeRemaining);


			greeting.textContent = timer.hour >= 0 && timer.hour < 5 ? 'Доброй ночи' :
				timer.hour >= 6 &&  timer.hour < 12 ? 'Доброе утро' :
					timer.hour >= 12 &&  timer.hour < 18 ? 'Добрый день' : 'Добрый вечер';
			dyaOfWeek.textContent = `Сегодная: ${daysOfWeekArray[timer.day]}`;
			currentTime.textContent = `Текущее время: ${newHour} : ${newMinutes} : ${newSeconds} ${newPeriodOfDay}`;
			newYearDays.textContent = `До нового года осталось: ${newYearDate} `;

			document.body.append(greeting, dyaOfWeek, currentTime, newYearDays);

			if (timer.timeRemaining < 0) {
				clearInterval(clear);
			}
		}
		// updateClock();
		clear = setInterval(updateClock, 1000);


	}


	counterTime('01 January 2022');

});
