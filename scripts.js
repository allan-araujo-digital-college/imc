let peso = parseInt(prompt("qual seu peso (em kg)"));
let altura = parseInt(prompt("qual sua altura (em cm)"));
let alturaFinal = altura / 100;
let imc = peso / (alturaFinal * alturaFinal);
console.log(imc);

// document.getElementById("mdi").textContent = "abaixo do peso";
// if (imc >= 20) {
//   document.getElementById("mdi").textContent = "peso normal";
// }
// if (imc >= 25) {
//   document.getElementById("mdi").textContent = "sobre peso";
// }
// if (imc >= 30) {
//   document.getElementById("mdi").textContent = "obeso";
// }
// if (imc >= 40) {
//   document.getElementById("mdi").textContent = "obeso mórbido";
// }
// if (imc < 20) {
//   document.getElementById("mdi").textContent = "abaixo do peso";
// }
if (imc >= 20 && imc < 25) {
  document.getElementById("mdi").textContent = "peso normal";
}
if (imc >= 25 && imc < 30) {
  document.getElementById("mdi").textContent = "sobre peso";
}
if (imc >= 30 && imc < 40) {
  document.getElementById("mdi").textContent = "obeso";
}
if (imc > 40) {
  document.getElementById("mdi").textContent = "obeso mórbido";
}
