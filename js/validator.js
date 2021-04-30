class Validator{
    constructor({selector, pattern, method}){
        this.selector = selector; //селектор формы
        this.method = method; //кастомные шаблоны валидаторов
        this.pattern = pattern; //настройки, где укзаано какие конкретно поля валидируются и какие свойства указываются
    }


    init() {
        console.log(this.selector);
    }

    showError(elem) {
        elem.classList.remove('success');
        elem.classList.add('error');
    }

    showSuccess(elem) {
        elem.classList.remove('error');
        elem.classList.add('success');
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
valid.applyStyle();