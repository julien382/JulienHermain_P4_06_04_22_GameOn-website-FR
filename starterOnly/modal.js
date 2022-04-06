function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const cross = document.querySelector(".close");

//input
const first = document.querySelector("#first");





const closeModal = () => {
  modalbg.classList.remove("appear");
}

// launch modal form
const launchModal = () => {
  modalbg.classList.add("appear");
}

// first input
const handlerFirstInput = (event) => {
  const value = event.target.value

  if(value.length <= 2){
    console.log("c'est pas bon")
  } 
  else{
    console.log("c'est bon")
  }
}



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
cross.addEventListener("click", closeModal);

// first modal event
first.addEventListener("input", handlerFirstInput);