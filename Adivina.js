let randomRes = (getRandomInt(100))
let resJuego = document.querySelector('.resJuego')
let intentos = document.querySelector(".intentos")
let mensajeLost = document.querySelector(".mensajeLost")
let dificultad = document.querySelector(".dificultad")
let dif3 = document.querySelector(".dif3")
let SendDif = document.querySelector(".SendDif")
let num1 = document.querySelector(".num1")
let SendTrys = document.querySelector(".SendTrys")
let resetButton
let cont = 0

function checkGuess() {
 // do{
  let tries = Mood()
  let num2 = Number(num1.value)

  if (num2 > randomRes) {
    resJuego.textContent = "El numero es menor, intentalo de nuevo..."
    cont++
    UserIntentos(tries, cont)
    if (tries == cont) { Mensaje(randomRes); setGameOver()}
  }
  else if (num2 == randomRes) {
    mensajeLost.textContent = "Felicidades adivinaste el numero..."
    setGameOver()
  }
  else if (num2 < randomRes) {
    resJuego.textContent = "El numero es mayor,intentalo de nuevo..."
    cont++
    UserIntentos(tries, cont)
    if (tries == cont) { Mensaje(randomRes); setGameOver()}
  }
//} while(num2 != randomRes && cont != tries) 
} 
SendDif.addEventListener('click', Mood)
SendTrys.addEventListener('click', checkGuess)
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
function Mood() {
  let intentos2 = 0;
  let dif = (dif3.value)
  let dif2 = dif.toUpperCase()
  if (dif2 == "FACIL") { intentos2 = 9; dificultad.textContent = "Dificultad: FACIL" ;SendDif.disabled = true;dif3.disabled = true}
  else if (dif2 == "MEDIO") { intentos2 = 7; dificultad.textContent = "Dificultad: MEDIO";SendDif.disabled = true;dif3.disabled = true} 
  else if (dif2 == "DIFICIL") { intentos2 = 5; dificultad.textContent = "Dificultad: DIFICIL";SendDif.disabled = true;dif3.disabled = true} 
  else if (dif2 == "EXPERTO") { intentos2 = 4; dificultad.textContent = "Dificultad: EXPERTO";SendDif.disabled = true;dif3.disabled = true} 
  else { intentos2 = 7; }
  return intentos2
}
function Mensaje(x) {
  mensajeLost.textContent = "!!!PERDISTE!!! Has revasado el numero de intentos"
  intentos.textContent = `El numero era ${x}`
}
function UserIntentos(a, b) {
  let conter = a - b
  intentos.textContent = `Te quedan ${conter} intentos`
}
function setGameOver() {
  num1.disabled = true
  SendTrys.disabled = true
  resJuego.textContent = ""
  resetButton = document.createElement('button')
  resetButton.textContent = 'Deseas volver a jugar?'
  resetButton.style.cursor = 'pointer'
  document.body.appendChild(resetButton)
  resetButton.addEventListener('click', reiniciarJuego)
}
function reiniciarJuego(){
  location.reload()
}
