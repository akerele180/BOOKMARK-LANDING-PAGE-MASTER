const answeredDee = document.getElementsByClassName("answers");
const ups = document.querySelectorAll(".up");


ups.forEach((element, index) => {
  element.addEventListener("click", ()=>{
    element.classList.toggle("down");
    console.log(answeredDee[index]);
    console.log(index)

    if (element.className.includes("down")){
      answeredDee[index].classList.toggle("answered");
    } else if (!element.className.includes("down")){
      answeredDee[index].classList.remove("answered")
    }
  })
})
