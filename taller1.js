// Punto 1
function convertidorTemp(tempCentigrados){
  return tempCentigrados * 9 / 5 + 32
}

console.log(convertidorTemp(100))

// Punto 2
// Si signo = 1, se retorna el resultado positivo
// Si signo = -1, se retorna el resultado negativo
function resolvedor(a, b, c, signo){
  const discriminante = Math.pow(b, 2) - 4 * a * c
  if (discriminante < 0){
    return NaN
  }
  return (-b + (signo === 1 ? 1 : -1) * Math.sqrt(discriminante)) / (2 * a)
}
console.log(resolvedor(1, 5, 4, -1))

// Punto 3
function mejorParidad(num){
    return num % 2 === 0
}

console.log(mejorParidad(2))

// Punto 4
function peorParidad(num) {
  if (num === 0) {
    return "par";
  } else if (num === 1) {
    return "impar";
  } else if (num === 2) {
    return "par";
  } else if (num === 3) {
    return "impar";
  } else if (num === 4) {
    return "par";
  } else if (num === 5) {
    return "impar";
  } else if (num === 6) {
    return "par";
  } else if (num === 7) {
    return "impar";
  } else if (num === 8) {
    return "par";
  } else if (num === 9) {
    return "impar";
  } else if (num === 10) {
    return "par";
  }
}

console.log(peorParidad(7))