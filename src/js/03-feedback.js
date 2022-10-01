const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('[name = email]');
const messageEl = document.querySelector('[name = message]');
const throttle = require('lodash.throttle');
const formData = {}


addDataInput();
formEl.addEventListener('input', throttle(event => {
   formData.email = emailEl.value;
   formData.message = messageEl.value;
   localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}, 500))

formEl.addEventListener('submit', event => {
   event.preventDefault()
   localStorage.removeItem("feedback-form-state")
   formData.email = emailEl.value;
   formData.message = messageEl.value;
   console.log(formData);
   event.currentTarget.reset()
})

function addDataInput() {
   const saveData = localStorage.getItem("feedback-form-state")
   try {
      const parsedData = JSON.parse(saveData);

      if (parsedData) {
         emailEl.value = parsedData.email;
         messageEl.value = parsedData.message;

      }
   } catch (error) {
      console.log(error.name);
      console.log(error.message);
   }

}









