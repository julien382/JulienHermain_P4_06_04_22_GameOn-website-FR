function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/////////////////////////////////////

// validate
let USER_INPUT = {
  firstname: {
    value: null,
    validate: true
  },
  lastname: {
    value: null,
    validate: true
  },
  email: {
    value: null,
    validate: true
  },
  birthdate: {
    value: null,
    validate: true
  },
  tournament: {
    value: null,
    validate: true
  },
  city: {
    value: null,
    validate: true
  },
  cgu: {
    validate: true
  },
  newsletter: {
    validate: false
  },
}

// DOM Elements
/// je m'inscris ///
const modalbg = document.querySelector(".bground");
const modalbgContentThanks = document.querySelector(".content_thanks");
const modalBtn = document.querySelectorAll(".modal-btn");
const cross = document.querySelector(".close");
/// c'est parti ///
const modalBtnSubmit = document.querySelectorAll(".modal-btn-submit");
const crossThanks = document.querySelector(".closeThanks");
const modalBtnSubmitThanks = document.querySelectorAll(".btn-submitThanks");
/// thanks ///

//data-error
const formData = document.querySelectorAll(".formData");

//input
const form = document.querySelector("form");
const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const cities = document.querySelectorAll(".checkbox-input[type-radio]");
const cgu = document.querySelector("#checkbox1");
const newsletter = document.querySelector("#checkbox2");



/////////////////////////////////////

/// je m'inscris ///
const closeModal = () => {
  modalbg.classList.remove("appear");
}

// launch modal form
const launchModal = () => {
  modalbg.classList.add("appear");
}
/// c'est parti ///
const closeModalThanks = () => {
  modalbgContentThanks.classList.remove("appear");
}

// launch modal form
const launchModalSubmit = () => {
  modalbg.classList.remove("appear");
  modalbgContentThanks.classList.add("appear");
}
/// thanks ///
const launchModalSubmitThanks = () => {
  modalbgContentThanks.classList.remove("appear");
}

// input
const handlerFirstInput = (event) => {
  // const value = first.value
  const value = event.target.value
  const formData = first.parentElement
  USER_INPUT.firstname.value = value

  if(value.length <= 2){
    console.log("prénom c'est pas bon")
    USER_INPUT.firstname.validate = false
    formData.setAttribute('data-error-visible', true)
    formData.setAttribute('data-error', 'Le prénom doit comporter au moins 2 caractères !')
  } 
  else{
    console.log("prénom c'est bon")
    USER_INPUT.firstname.validate = true
    formData.setAttribute('data-error-visible', false)
  }
}

const lastInput = (event) => {
  const value = event.target.value
  const formData = last.parentElement
  USER_INPUT.lastname.value = value

  if(value.length <= 2){
    console.log("nom c'est pas bon")
    USER_INPUT.lastname.validate = false
    formData.setAttribute('data-error-visible', true)
    formData.setAttribute('data-error', 'Le nom doit comporter au moins 2 caractères !')
  } 
  else{
    console.log("nom c'est bon")
    USER_INPUT.lastname.validate = true
    formData.setAttribute('data-error-visible', false)
  }
}

const emailInput = (event) => {
  const value = event.target.value
  const formData = email.parentElement
  USER_INPUT.email.value = value
  const emailRegex = new RegExp("^[a-z0-9\.]+@[a-z0-9]+\.[a-z]{2,3}$", 'g') // regex maison pour les email

  if (emailRegex.test(value)){
    console.log("email c'est bon")
    USER_INPUT.email.validate = true
    formData.setAttribute('data-error-visible', false)
  } 
  else {
    console.log("email c'est pas bon")
    USER_INPUT.email.validate = false
    formData.setAttribute('data-error-visible', true)
    formData.setAttribute('data-error', 'L\'email  est invalide !')
  }
}

const birthdateInput = (event) => {
  const numberRegex = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$", 'g') // le + ==> au moins 1 caractère (ici chiffre)
  const value = event.target.value
  const formData = birthdate.parentElement
  USER_INPUT.birthdate.value = value

  if(numberRegex.test(value)){
    console.log("birthdate c'est bon")
    USER_INPUT.birthdate.validate = true
    formData.setAttribute('data-error-visible', false)
  } 
  else{
    console.log("birthdate c'est pas bon")
    USER_INPUT.birthdate.validate = false
    formData.setAttribute('data-error-visible', true)
    formData.setAttribute('data-error', 'La date correspond pas !')
  }
}

const quantityInput = (event) => {
  const numberRegex = new RegExp("^[0-9]+$", 'g') // le + ==> au moins 1 caractère (ici chiffre)
  const value = event.target.value
  const formData = quantity.parentElement
  USER_INPUT.tournament.value = value

  if (numberRegex.test(value)) {
    console.log("quantity c'est bon")
    USER_INPUT.tournament.validate = true
    formData.setAttribute('data-error-visible', false)
  } else {
    console.log("quantity c'est pas bon");
    USER_INPUT.tournament.validate = false
    formData.setAttribute('data-error-visible', true)
    formData.setAttribute('data-error', 'La quantité ne correspond pas !')
  }
}

const cityHandler = (event) => {
  const isChecked = event.target.value
  if (isChecked){
    console.log("city c'est bon")
    USER_INPUT.city.validate = true
  } else {
    console.log("city c'est pas bon")
    USER_INPUT.city.validate = false
  }
}

const cguHandler = (event) => {
  const isChecked = event.target.checked  // (true/false)
  const formData = cgu.parentElement

  if (isChecked){
    console.log("cgu c'est bon")
    USER_INPUT.cgu.validate = true
    formData.setAttribute('data-error-visible', false)
  } else {
    console.log("cgu c'est pas bon")
    USER_INPUT.cgu.validate = false
    formData.setAttribute('data-error-visible', true)
    formData.setAttribute('data-error', 'Le cgu ne correspond pas !')
  }
}

const newsletterHandler = (event) => {
  const isChecked = event.target.checked  // (true/false)

  if (isChecked){
    console.log("newsletter c'est bon")
    USER_INPUT.newsletter.validate = true
  } else {
    console.log("newsletter c'est pas bon")
    USER_INPUT.newsletter.validate = false
  }
}

const validate = (event) => {
  // on arrête le comportement par défaut (new page)
  event.preventDefault()
  console.log('user responses:', USER_INPUT);



  for (const input in USER_INPUT) {
    // input = "firstname", "lastname", "email"....

    // USER_INPUT.firstname
    // USER_INPUT['firstname']

    if (USER_INPUT[input].validate == false) {
      alert('c\'est pas bon')
      break
    } else {
      console.log('ok !!');
      // 1 - tu caches le formulaire
      // 2 - affiche la modal d'inscription
    }
  }
  
}


/////////////////////////////////////

/// je m'inscris ///
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
cross.addEventListener("click", closeModal);

/// c'est parti ///
// launch modal event
modalBtnSubmit.forEach((btn) => btn.addEventListener("click", launchModalSubmit));
modalBtnSubmitThanks.forEach((btn) => btn.addEventListener("click", launchModalSubmitThanks));

// close modal event
crossThanks.addEventListener("click", closeModalThanks);


/// thanks ///




/// form validate ///
form.addEventListener('submit', validate)

// input modal event
first.addEventListener("input", handlerFirstInput);
last.addEventListener("input", lastInput);
email.addEventListener("input", emailInput);
birthdate.addEventListener("input", birthdateInput);
quantity.addEventListener("input", quantityInput);
cities.forEach(city => {city.addEventListener('click', cityHandler)});

cgu.addEventListener("click", cguHandler);
newsletter.addEventListener("click", newsletterHandler);