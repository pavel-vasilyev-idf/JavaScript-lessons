const sendForm = () => {

const errorMessage = 'Что-то пошло не так...';
const loadMessage = 'Загрузка...';
const successMessage = 'Все успешно отпралвено';


const clearInput = (elem) => {
  const form = document.getElementById(elem);
  [...form.elements].filter(item =>
      item.tagName.toLowerCase() !== 'button' &&
      item.type !== 'button').forEach(item =>
      item.value = '');
};

const isValid = (event) => {
  const target = event.target;

  if (target.matches('.form-phone')) {
    target.value = target.value.replace(/[^\d\(\)\-]/g, '');
  }
  if (target.name === 'user_name') {
    target.value = target.value.replace(/[^а-яё ]/gi, '');
  }
  if (target.name === 'user_email') {
    target.value = target.value.replace(/[^a-z\@\_\-\.\!\~\*\']/gi, '');
  }
  if (target.matches('.mess')) {
    target.value = target.value.replace(/[^а-яё ,.]/gi, '');
  }
}


const postData = (body) => {

  return fetch('server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  
}

const sendSomeForm = (elem) => {
  const form = document.getElementById(elem);
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 3rem';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.appendChild(statusMessage);
    statusMessage.innerHTML = `
      <img src="https://i.gifer.com/YmvJ.gif" alt="cat">
    `;

    const formData = new FormData(form);
    let body = {};
    // for (const val of formData.entries()) {
    // 	body[val[0]] = val[1];
    // }			

    // formData.forEach((item, key) => {
    // 	body[key] = item;
    // });


    postData(Object.fromEntries(formData))
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200');
        }
        statusMessage.textContent = successMessage;
        clearInput(elem);
        setTimeout(() => {
        statusMessage.innerHTML = '';
        document.querySelector('.popup').style.display = 'none';
        }, 4000)
        let formInputs = form.querySelectorAll('input');
        formInputs.forEach(input => {
        input.value = input.defaultValue;
        })
      })
      .catch((error) => {
        statusMessage.textContent = errorMessage;
        console.error(error);
        setTimeout(() => {
        statusMessage.innerHTML = '';
        document.querySelector('.popup').style.display = 'none';
        }, 4000)
      })

  });
form.addEventListener('input', isValid);
};

sendSomeForm('form1');
sendSomeForm('form2');
sendSomeForm('form3');


}


export default sendForm;