//calc
const checkCalcBlock = () => {
	const calcBlock = document.querySelector('.calc-block');

	calcBlock.addEventListener('input', (event) => {
		let target = event.target;
		if (target.type === 'text') {
			target.value = target.value.replace(/[^\d]/g, '');
		}
	});
};

export default checkCalcBlock;