const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const data = {};

  data.email = event.currentTarget.elements.email.value;
  data.password = event.currentTarget.elements.password.value;
  console.log(data);

  if (!data.email || !data.password) {
    return alert("Усі поля мають бути заповнені");
  }

  event.currentTarget.reset();
}
