// PUNTO 1
function filterVocales(letter) {
  const vocales = ["a", "e", "i", "o", "u"];
  if (vocales.some((l) => l === letter)) {
    return true;
  } else {
    return false;
  }
}

function filterConsonantes(letter) {
  const consonantes = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  if (consonantes.some((l) => l === letter)) {
    return true;
  } else {
    return false;
  }
}

function desglosarString(string, command) {
  return string.split("").filter((letter => command === "vocales" ? filterVocales(letter) : filterConsonantes(letter))).length;
}

console.log(desglosarString("murcielagos", "vocales"));


// PUNTO 2