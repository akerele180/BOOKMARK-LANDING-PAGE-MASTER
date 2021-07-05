const up = document.querySelectorAll[1](".up");
const down = document.querySelector(".down");
// const answers = document.querySelector(".answers");
// const answered = document.querySelector(".answered");

up.addEventListener('click', ()=>{
  up.classList.toggle("down");
  answers.classList.toggle("answered")
});