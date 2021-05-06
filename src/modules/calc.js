//calculator
const calc = (price = 100) => {
	const calcBlock = document.querySelector('.calc-block');
	const calcType = document.querySelector('.calc-type');
	const calcDay = document.querySelector('.calc-day');
	const calcSquare = document.querySelector('.calc-square');
	const calcCount = document.querySelector('.calc-count');
	const totalValue = document.getElementById('total');

	const countSum = () => {
		let total = 0;
		let countValue = 1;
		let dayValue = 1;
		const typeValue = calcType.options[calcType.selectedIndex].value;
		const squareValue = +calcSquare.value;

		if (calcCount.value > 1) {
			countValue += (calcCount.value - 1) / 10;
		};

		if (calcDay.value && calcDay.value < 5) {
			dayValue *=  2;
		} else if (calcDay.value && calcDay.value < 10) {
			dayValue *=  1.5;
		};

		if (typeValue && squareValue) {
			total = price * typeValue * squareValue * countValue * dayValue;
		};

		totalValue.textContent = total;
		animateValue(totalValue, 0, totalValue.textContent, 800);

	};

	calcBlock.addEventListener('change', (event) => {
		const target = event.target;

		if (target.matches('select') || target.matches('input')) {
			countSum();
		};
	}); 

	function animateValue(obj, start, end, duration) {
		let startTimestamp = null;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			obj.innerHTML = Math.floor(progress * (end - start) + start);
			if (progress < 1) {
			window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
		}
}

export default calc;