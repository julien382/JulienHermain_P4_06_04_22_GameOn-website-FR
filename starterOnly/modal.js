function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/////////////////////////////////////


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const cross = document.querySelector(".close");

//input
const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");


/////////////////////////////////////


const closeModal = () => {
  modalbg.classList.remove("appear");
}

// launch modal form
const launchModal = () => {
  modalbg.classList.add("appear");
}

// input input
const handlerFirstInput = (event) => {
  const value = event.target.value

  if(value.length <= 2){
    console.log("c'est pas bon")
  } 
  else{
    console.log("c'est bon")
  }
}

const lastInput = (event) => {
  const value = event.target.value

  if(value.length <= 2){
    console.log("c'est pas bon")
  } 
  else{
    console.log("c'est bon")
  }
}

const emailInput = (event) => {
  const value = event.target.value

  if(value.length <= 2){
    console.log("c'est pas bon")
  } 
  else{
    console.log("c'est bon")
  }
}

const birthdateInput = (event) => {
  const value = event.target.value

  if(value.length <= 2){
    console.log("c'est pas bon")
  } 
  else{
    console.log("c'est bon")
  }
}

const quantityInput = (event) => {
  const value = event.target.value

  if(value.length <= 2){
    console.log("c'est pas bon")
  } 
  else{
    console.log("c'est bon")
  }
}


/////////////////////////////////////


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
cross.addEventListener("click", closeModal);

// input modal event
first.addEventListener("input", handlerFirstInput);
last.addEventListener("input", lastInput);
email.addEventListener("input", emailInput);
birthdate.addEventListener("input", birthdateInput);
quantity.addEventListener("input", quantityInput);