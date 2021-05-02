class Validator{
    constructor({selector, pattern = {}, method}){
        this.form = document.querySelector(selector); //селектор формы
        this.method = method; //кастомные шаблоны валидаторов
        this.pattern = pattern; //настройки, где укзаано какие конкретно поля валидируются и какие свойства указываются
        this.elementsForm = [...this.form.elements].filter(item => {
            return item.tagName.toLowerCase !== 'button' || item.type !== 'button';
        });
        this.error = new Set();
    }


    init() {
        this.applyStyle();
        this.setPaattern();
        this.elementsForm.forEach(item => item.addEventListener('change', this.checkIt.bind(this)));
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            this.elementsForm.forEach(elem => this.checkIt({target: elem}));
            if (this.error.size) {
                event.preventDefault();
            }
        })
    }

    isValid(elem) {
        const validatorMethod = {
            notEmpty(elem) {
                if (elem.value.trim() === '') {
                    return false;
                }
                return true;
            },
            pattern(elem, pattern) {
                return pattern.test(elem.value);
            }
        };
        if (this.method) {
            const method = this.method[elem.id];

            if (method) {
                return method.every(item => validatorMethod[item[0](elem, this.pattern[item[1]])])
            }
        } else {

        }

        return true;
    }

    checkIt(event) {
        const target = event.target;

        if (this.isValid(target)) {
            this.showSuccess(target);
            this.error.delete(target);
        } else {
            this.showError(target);
            this.error.add(target);
        }
    }

    showError(elem) {
        elem.classList.remove('success');
        elem.classList.add('error');
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains(validator-error)) {
            return;
        }
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'ОШибка в этом поле';
        errorDiv.classList.add('validator-error');
        elem.insertAdjacentElement('afterend', errorDiv);

    }

    showSuccess(elem) {
        elem.classList.remove('error');
        elem.classList.add('success');
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
            elem.nextElementSibling.remove();
        }
    }

    applyStyle() {
        const style = document.createElement('style')
        style.textContent = `
            input.success {
                border: 2px solid green;
            }
            input.error {
                border: 2px solid red;
            }
            .validator-error {
                font-size: 12px;
                font-family: sans-serif;
                color: red;
            }
        `;
        document.head.appendChild(style);
    }

    setPaattern() {
        if (!this.pattern.phone) {
            this.pattern.phone = /^\+?[78]([-()]*\d){10}$/;
        }

        if (!this.pattern.email) {
            this.pattern.email = /^\w+@\w+\.\w{2,}$/;
        }
    }
}



const valid = new Validator({
    selector: '#form3',
    pattern: {
        phone: /^\d+$/
    },
    method: {
        'phone': [
            ['notEmpty'],
            ['pattern', 'zip', 'phone']
        ],
        'email': [
            ['pattern', 'zip', 'emeail']
        ]
    },
});

valid.init();
