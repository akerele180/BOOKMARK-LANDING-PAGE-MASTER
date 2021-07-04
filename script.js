const up = document.querySelectorAll(".up");
const down = document.querySelectorAll(".down");
const answers = document.querySelectorAll(".answers");
const answered = document.querySelectorAll(".answered");


// function rotate(){
//   up.classList.toggle('down');
//   answers.classList.toggle("answered");

//   down.classList.remove("up")
//   answered.classList.remove("answers");

// }

// function rotated(){
//   up.classList.remove("down");
//   answers.classList.remove("answered")
// }
// down.addEventListener('click', rotated());
up.addEventListener('click', (){
  up.classList.toggle("down");
});