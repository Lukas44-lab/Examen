const principalContainer = document.querySelector(".container");
const messageContainer = document.querySelector(".container-message");
const buttonList = document.querySelectorAll(".button-list button");
const sendReply = document.querySelector(".button-submit button");
const showAnswer = document.querySelector(".survey-points");
let answer = '';
principalContainer.style.display = "block";
messageContainer.style.display = "none";

buttonList.forEach((button) => {
  button.addEventListener("click", () => {
    buttonList.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    answer = button.textContent;
    console.log(answer);
  });
});

sendReply.addEventListener("click", () => {
  if (answer) {
    principalContainer.style.display = "none";
    messageContainer.style.display = "block";
    showAnswer.textContent = `Seleccionaste ${answer} de 5`;
  }
});