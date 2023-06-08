//const inputs = document.querySelectorAll('input')
let classes = (classes) => document.querySelector(classes)
//user info
let cardName = classes('.cardholder-name'),
  cardNumber = classes('.card-number'),
  expMonth = classes('.exp-month'),
  expYear = classes('.exp-year'),
  cvcNumber = classes('.cvc-number'),
  //on card elements
  onCardNumber = classes('.on-card-number'),
  onCardName = classes('.on-card-name'),
  onCardExpMonth = classes('.on-card-exp-month'),
  onCardExpYear = classes('.on-card-exp-year'),
  onCardCvc = classes('.on-card-cvc'),
  //error messages
  nameError = classes('.error-name'),
  numberError = classes('.error-number'),
  dateError = classes('.error-date'),
  cvcError = classes('.error-cvc'),
  thankYouMsg = classes('.thank-you-message')
//form and submit btn
submitBtn = classes('.submit-btn')
const form = document.querySelector('form')

isValid = false

//render info on card previews

function renderInfo(input, onCardInfo) {
  input.addEventListener('keyup', function () {
    onCardInfo.innerText = input.value
  })
}

renderInfo(cardName, onCardName)
renderInfo(cardNumber, onCardNumber)
renderInfo(cvcNumber, onCardCvc)
renderInfo(expMonth, onCardExpMonth)
renderInfo(expYear, onCardExpYear)

//show error messages when submitting

function validateInput(input, error, message) {
  input.addEventListener('keyup', function () {
    if (input.value.trim() === '') {
      error.textContent = message
      error.style.color = 'red'
      input.style.border = '1px solid red'
      isValid = false
    } else if (input.value.length > 0) {
      error.style.color = 'white'
      input.style.border = 'revert'
      isValid = true
    }
  })
}

validateInput(cardName, nameError, 'Name is required')
validateInput(cvcNumber, cvcError, "Can't be blank")
validateInput(expMonth, dateError, "Can't be blank")
validateInput(expYear, dateError, "Can't be blank")

function validateNumberFormat() {
  cardNumber.addEventListener('keyup', function () {
    if (!cardNumber.value.match('^[0-9]+$')) {
      numberError.textContent = 'Wrong format, numbers only. No spaces.'
      numberError.style.color = 'red'
      cardNumber.style.border = '1px solid red'
      isValid = false
    } else {
      numberError.style.color = 'white'
      cardNumber.style.border = 'revert'
      isValid = true
    }
  })
}

validateNumberFormat()

//form submission

form.addEventListener('submit', function (e) {
  if (isValid === false) {
    e.preventDefault()
  } else if (isValid === true) {
    form.submit()
  }
})
