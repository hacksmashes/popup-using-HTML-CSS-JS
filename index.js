let container = document.querySelector(".container");
let btn = document.querySelector(".btn");

function popUp() {
  btn.style.display = "none";
  container.classList.add("popUpOn");

  setTimeout(() => {
    container.classList.remove("popUpOn");
    container.classList.add("popUpOut");
  
    setTimeout(() => {
      container.classList.remove("popUpOut");
      btn.innerHTML = "subscribed";
      btn.classList.add("btnAfter");
      btn.style.display = "block";
    }, 850);
  }, 3000);
}

