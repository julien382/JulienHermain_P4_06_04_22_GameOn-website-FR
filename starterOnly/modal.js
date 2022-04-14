function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/////////////////////////////////////

let USER_INPUT = {
  firstname: {
    value: null,
    validate: false
  },
  lastname: {
    value: null,
    validate: false
  },
  email: {
    value: null,
    validate: false
  },
  birthdate: {
    value: null,
    validate: false
  },
  tournament: {
    value: null,
    validate: false
  },
  city: {
    value: null,
    validate: false
  },
  cgu: {
    value: null,
    validate: false
  },
  newsletter: {
    value: null,
    validate: false
  },
}


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const cross = document.querySelector(".close");

//input
const form = document.querySelector("form");
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
  // const value = first.value
  const value = event.target.value
  USER_INPUT.firstname.value = value

  if(value.length <= 2){
    console.log("prénom c'est pas bon")
    USER_INPUT.firstname.validate = false
  } 
  else{
    console.log("prénom c'est bon")
    USER_INPUT.firstname.validate = true
  }
}

const lastInput = (event) => {
  const value = event.target.value

  if(value.length <= 2){
    console.log("nom c'est pas bon")
  } 
  else{
    console.log("nom c'est bon")
  }
}

const emailInput = (event) => {
  const value = event.target.value
  const emailRegex = new RegExp("^[a-z0-9\.]+@[a-z0-9]+\.[a-z]{2,3}$", 'g') // regex maison pour les email

  if (emailRegex.test(value)){
    console.log("email c'est bon")
  } 
  else {
    //
    console.log("email c'est pas bon")
  }
}

const birthdateInput = (event) => {
  const value = event.target.value

  if(value.length <= 2){
    console.log("birthdate c'est pas bon")
  } 
  else{
    console.log("birthdate c'est bon")
  }
}

const quantityInput = (event) => {
  const numberRegex = new RegExp("^[0-9]+$", 'g') // le + ==> au moins 1 caractère (ici chiffre)
  const value = event.target.value

  if (numberRegex.test(value)) {
    console.log("quantity c'est bon")
  } else {
    console.log("quantity c'est pas bon");
  }

}



const validate = (event) => {
  // on arrête le comportement par défaut
  event.preventDefault()
  // a partir de là c'est bibi qui gère !
  console.log('user responses:', USER_INPUT);

  // if toute les clé de USER_INPUT.xxx.validate sont bonnes
  // console.log('validate: on peut envoyer les datas')
  // else
  // console.log('pas validate')
}


/////////////////////////////////////


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
cross.addEventListener("click", closeModal);

form.addEventListener('submit', validate)

// input modal event
first.addEventListener("input", handlerFirstInput);
last.addEventListener("input", lastInput);
email.addEventListener("input", emailInput);
birthdate.addEventListener("input", birthdateInput);
quantity.addEventListener("input", quantityInput);