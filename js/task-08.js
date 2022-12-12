const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (!email || !password) {
    return alert("Усі поля мають бути заповнені");
  }

  const data = {};

  data.email = email;
  data.password = password;
  console.log(data);

  event.currentTarget.reset();
}
