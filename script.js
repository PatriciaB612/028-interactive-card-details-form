//user info
const cardName = document.querySelector('.cardholder-name')
const cardNumber = document.querySelector('.card-number')
const expMonth = document.querySelector('.exp-month')
const expYear = document.querySelector('.exp-year')
const cvcNumber = document.querySelector('.cvc-number')
const inputs = document.querySelectorAll('input')
//on card elements
const onCardNumber = document.querySelector('.on-card-number')
const onCardName = document.querySelector('.on-card-name')
const onCardExpMonth = document.querySelector('.on-card-exp-month')
const onCardExpYear = document.querySelector('.on-card-exp-year')
const onCardCvc = document.querySelector('.on-card-cvc')
//error messages
const nameError = document.querySelector('.error-name')
const numberError = document.querySelector('.error-number')
const dateError = document.querySelector('.error-date')
const cvcError = document.querySelector('.error-cvc')
//form and submit btn
const submitBtn = document.querySelector('.submit-btn')
const form = document.querySelector('form')

//render info on card previews

form.addEventListener('submit', function (e) {
  e.preventDefault()
})

function renderInfo() {
  cardNumber.addEventListener('keyup', function () {
    onCardNumber.innerText = cardNumber.value
  })

  cardName.addEventListener('keyup', function () {
    onCardName.innerText = cardName.value
  })

  expMonth.addEventListener('keyup', function () {
    onCardExpMonth.innerText = expMonth.value
  })

  expYear.addEventListener('keyup', function () {
    onCardExpYear.innerText = expYear.value
  })

  cvcNumber.addEventListener('keyup', function () {
    onCardCvc.innerText = cvcNumber.value
  })
}

//show error messages when submitting

function validateName() {
  cardName.addEventListener('keyup', function () {
    if (cardName.value === '') {
      nameError.style.color = 'red'
      cardName.style.border = '1px solid red'
      return false
    } else {
      nameError.style.color = 'white'
      cardName.style.border = 'revert'
      return true
    }
  })
}

function validateNumber() {
  cardNumber.addEventListener('keyup', function () {
    if (!cardNumber.value.match('^[0-9]+$')) {
      numberError.textContent = 'Wrong format, numbers only'
      numberError.style.color = 'red'
      cardNumber.style.border = '1px solid red'
      return false
    } else if (cardNumber.value === '') {
      numberError.textContent = "Can't be blank"
      return false
    } else {
      numberError.style.color = 'white'
      cardNumber.style.border = 'revert'
      return true
    }
  })
}

function validateExpMonth() {
  expMonth.addEventListener('keyup', function () {
    if (expMonth.value === '') {
      dateError.style.color = 'red'
      expMonth.style.border = '1px solid red'
      return false
    } else {
      dateError.style.color = 'white'
      expMonth.style.border = 'revert'
      return true
    }
  })
}

function validateExpYear() {
  expYear.addEventListener('keyup', function () {
    if (expYear.value === '') {
      dateError.style.color = 'red'
      expYear.style.border = '1px solid red'
      return false
    } else {
      dateError.style.color = 'white'
      expYear.style.border = 'revert'
      return true
    }
  })
}

function validateCvcNumber() {
  cvcNumber.addEventListener('keyup', function () {
    if (cvcNumber.value === '') {
      cvcError.style.color = 'red'
      cvcNumber.style.border = '1px solid red'
      return false
    } else {
      cvcError.style.color = 'white'
      cvcNumber.style.border = 'revert'
      return true
    }
  })
}

validateName()
validateNumber()
validateExpMonth()
validateExpYear()
validateCvcNumber()

renderInfo()
