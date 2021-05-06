const checkFooterForm = () => {
  const footerForm = document.querySelector('.footer-form-input');

  footerForm.addEventListener('input', (event) => {
    let target = event.target;
    if (target.type === 'text') {
      target.value = target.value.replace(/[^а-яА-ЯЁё\-\ ]/, '');
    } else if (target.type === 'email') {
      target.value = target.value.replace(/[^a-zA-Z\@\_\-\.\!\~\*\']/, '');
    } else if (target.type === 'tel') {
      target.value = target.value.replace(/[^\d\(\)\-]/g, '');
    }
  });
};

export default checkFooterForm;