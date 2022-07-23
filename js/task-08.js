
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заполните все поля!");
  }

  console.log(`Логин: ${email.value}, Пароль: ${password.value}`);
  event.currentTarget.reset();
}