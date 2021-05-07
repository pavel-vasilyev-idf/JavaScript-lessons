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
};

  sendSomeForm('form1');
  sendSomeForm('form2');
  sendSomeForm('form3');


}

export default sendForm;