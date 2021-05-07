class Validator{
    constructor({selector, pattern, method}){
        this.form = document.querySelector(selector); //селектор формы
        this.method = method; //кастомные шаблоны валидаторов
        this.pattern = pattern; //настройки, где укзаано какие конкретно поля валидируются и какие свойства указываются
    }


    init() {
        this.applyStyle();
        console.log(this.form.elements);
    }

    showError(elem) {
        elem.classList.remove('success');
        elem.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Error';
        errorDiv.classList.add('validator-error');
        elem.insertAdjacentElement('afterend', errorDiv);
    }

    showSuccess(elem) {
        elem.classList.remove('error');
        elem.classList.add('success');
        if (elem.nextElementSibling.classList.contains('validator-error')) {
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
                font-size: 14px;
                color: red;
            }
        `;
        document.head.appendChild(style);
    }
}



const valid = new Validator({
    selector: '#form3',
    pattern: {},
    method: {},
});

valid.init();