const validateInputs = () => {
	const calcInputs = document.querySelectorAll('input.calc-item'),
		formName = document.querySelectorAll('[name=user_name]'),
		formMessage = document.querySelectorAll('[name=user_message]'),
		formEmail = document.querySelectorAll('[name=user_email]'),
		formPhone = document.querySelectorAll('[name=user_phone]');

	let error = new Set();

	const validateNumberInputs = () => {
		calcInputs.forEach(el => {
			el.value = el.value.replace(/[^\d]/g, '');
		})
	};

	const validateLetterInputs = (input) => {
		input.value = input.value.replace(/[^а-яё0-9\.\,\:\-\!\? ]/gi, '');
	};

	const inputsHandler = (e) => {
		if (e.target.matches('.calc-item')) {
			validateNumberInputs();
		}
		if (e.target.matches('[name=user_name]')) {
			e.target.value = e.target.value.replace(/[^а-яё\-\ ]/gi, '');
		}
		if (e.target.matches('#form2-message')) {
			validateLetterInputs(e.target);
		}
		if (e.target.matches('[name=user_email]')) {
			e.target.value = e.target.value.replace(/[^a-z0-9\@\_\-\.\!\~\*\']/gi, '');
		}
		if (e.target.matches('[name=user_phone]')) {
            e.target.value = e.target.value.replace(/[^\d\(\)\-\+]/g, '');
            if (e.target.value.length > 10) {
                e.target.value = e.target.value.substring(0, 11)
            }
        }
	}

	const trim = (input) => {
		input.value = input.value.replace(/\s+/g, ' ');
		input.value = input.value.replace(/\-+/g, '-');

		let inputToExp = new RegExp("ReGeX" + input.value + "ReGeX");
		if (/^[/ /-]/.test(inputToExp)) {
			input.value = input.value.replace(/^[/ /-]/, '')
		}
		if (/[/ /-]$/.test(inputToExp)) {
			input.value = input.value.replace(/[/ /-]$/, '')
		}
	}

	const capitalize = (input) => {
		let inputValue = input.value
		return inputValue.split(' ').map(item =>
			item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(' ');
	}

	const controlInputs = (input, exp, message = 'Введите корректные данные') => {
		if (!input.value.match(exp)) {
			error.add(input.value)
			input.value = '';
		} 
	}

	formName.forEach(el => {
		el.addEventListener('blur', () => {
			trim(el);
			el.value = capitalize(el);
			controlInputs(el, /[а-яё]{2,}/gi);
		})
	})

	formMessage.forEach(el => {
		el.addEventListener('blur', () => {
			trim(el);
			el.value = capitalize(el);
			controlInputs(el, /[а-яё]{2,}/gi);
		})
	})

	formEmail.forEach(el => {
        el.addEventListener('blur', () => {
            el.value = el.value.replace(/\s/g, '');
            controlInputs(el, /\w+@\w+.\w{2,3}/g);
        })
    })

	formPhone.forEach(el => {
		el.addEventListener('blur', () => {
			trim(el);
			controlInputs(el, /\+?([-()]*\d){7,10}/g);
		})
	})

	window.addEventListener('input', inputsHandler);
}

export default validateInputs;