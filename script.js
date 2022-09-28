const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const number = document.getElementById('number')
const message = document.getElementById('message')

form.addEventListener('submit', e => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  const usernameValue = username.value
  const emailValue = email.value
  const numberValue = number.value
  const messageValue = message.value

  if (usernameValue === '') {
    setErrorFor(username, 'O nome é obrigatório')
  } else {
    setSucessFor(username)
  }

  if (emailValue === '') {
    setErrorFor(email, 'O email é obrigatório')
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, 'Por favor insira um email válido')
  } else {
    setSucessFor(email)
  }

  if (numberValue === '') {
    setErrorFor(number, 'O número é obrigatório')
  } else if (numberValue.length != 12) {
    expReg = /[1-9][1-9] [2-9]?[0-9]{4}-[0-9]{4}/
    numberValue.match(expReg) && numberValue === ''
    setErrorFor(number, 'Por favor insira um número de telefone válido')
  } else {
    setSucessFor(number)
  }

  if (messageValue === '') {
    setErrorFor(message, 'A mensagem é obrigatória')
  } else if (messageValue.length < 10) {
    setErrorFor(message, 'Escreva pelo menos 10 caracteres')
  } else {
    setSucessFor(message)
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  // adicionar messagem de erro //
  small.innerText = message

  // adicionar classe de erro //
  formControl.className = 'form-control error'
}

function setSucessFor(input) {
  const formControl = input.parentElement

  // adicionar classe de sucesso //
  formControl.className = 'form-control success'
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}
