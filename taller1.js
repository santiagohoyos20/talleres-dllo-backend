// Punto 1
function convertidorTemp(tempCentrigrados){
  return tempCentrigrados * 9 / 5 + 32
}

console.log(convertidorTemp(100))

// Punto 2
// Si signo = 1, se retorna el resultado positivo
// Sino, se retorna el resultado negativo
function resolvedor(a, b, c, signo){
  if (signo == 1){
    return (b *-1 + Math.sqrt(Math.pow(b, 2) - 4*a*c)) / (2*a)
  }
  return (b *-1 - Math.sqrt(Math.pow(b, 2) - 4*a*c)) / (2*a)
}

console.log(resolvedor(1, 5, 4, 1))