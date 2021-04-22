
window.addEventListener('DOMContentLoaded', () => {


	//timer
	function countTimer(dedline) {
		const timerHours = document.querySelector('#timer-hours');
		const timerMinutes = document.querySelector('#timer-minutes');
		const timerSeconds = document.querySelector('#timer-seconds');
		const timerDays = document.querySelector('#timer-days');
		const spanToDays = document.querySelector('.dott-days');
		let clear = 0;

		function getTimeRemaining() {
			const dateStop = new Date(dedline).getTime();
			const dateNow = new Date().getTime();
			const timeRemaining = (dateStop - dateNow) / 1000;
			const seconds = Math.floor(timeRemaining % 60);
			const minutes = Math.floor((timeRemaining / 60) % 60);
			const hours = Math.floor((timeRemaining / 60 / 60) % 24);
			const days = Math.floor(timeRemaining / 60 / 60 / 24);
			return {
				timeRemaining,
				hours,
				minutes,
				seconds,
				days
			};
		}

		function updateClock() {
			const timer = getTimeRemaining();

			timerDays.textContent = timer.days < 10 ? `0${timer.days}` : timer.days;
			timerHours.textContent = timer.hours < 10 ? `0${timer.hours}` : timer.hours;
			timerMinutes.textContent = timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes;
			timerSeconds.textContent = timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds;

			if ((timer.hours < 0) || (timer.minutes < 0) || (timer.seconds < 0) || (timer.days < 0)) {
				timerHours.textContent = `00`;
				timerMinutes.textContent = `00`;
				timerSeconds.textContent = `00`;
				timerDays.textContent = `00`;
			}

			if (timer.days === 0) {
				timerDays.style.display = 'none';
				spanToDays.style.display = 'none';
			} else {
				timerDays.style.display = 'inline-block';
				spanToDays.style.display = 'inline-block';
			}
			if (timer.timeRemaining < 0) {
				const endDate = new Date(dedline);
				endDate.setDate(endDate.getDate());
				countTimer(endDate);
				clearInterval(clear);
			}
		}
		clear = setInterval(updateClock, 1000);
		console.log('clear: ', clear);
	}

	// setInterval(countTimer, 1000, '22 April 2021');
	// countTimer('22 April 2021');
	countTimer('23 April 2021');
});
