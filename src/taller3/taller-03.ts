// PUNTO 1
export function filterVocales(letter: string): boolean {
  const vocales = ["a", "e", "i", "o", "u"];
  if (vocales.some((l) => l === letter)) {
    return true;
  } else {
    return false;
  }
}

export function filterConsonantes(letter: string) {
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

export function desglosarString(string: string, command: "vocales" | "consonantes"): number {
  return string
    .split("")
    .filter((letter: string) =>
      command === "vocales" ? filterVocales(letter) : filterConsonantes(letter)
    ).length;
}
// console.log(desglosarString("murcielagos", "vocales"));

// PUNTO 2
export function twoSum(numbers: number[], target: number): number[] {
  let hashmap = new Map();
  let complement, x;
  for (let i = 0; i < numbers.length; i++) {
    complement = target - numbers[i];
    if (hashmap.has(complement)) {
      return [hashmap.get(complement), i];
    }
    hashmap.set(numbers[i], i);
  }
  return [];
}
// console.log(twoSum([3, 4, 2], 6));

// PUNTO 3
export function conversionRomana(roman: string): number {
  const ROMAN_VALUES: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i < roman.length; i++) {
    const curr = ROMAN_VALUES[roman[i]];
    const next = ROMAN_VALUES[roman[i + 1]] ?? 0;

    if (curr < next) {
      total += next - curr;
      i++;
    } else {
      total += curr;
    }
  }
  return total;
}
// console.log(conversionRomana("MCMXCVII"));

// PUNTO 4
export function descomposicion(entrada: string) {
  const palabras = entrada.split(",");
  const palabraADescomponer = palabras[0];
  const diccionario = palabras.slice(1);

  for (let i = 0; i < diccionario.length; i++) {
    for (let j = i + 1; j < diccionario.length; j++) {
      if (diccionario[i] + diccionario[j] === palabraADescomponer) {
        return [diccionario[i], diccionario[j]];
      }
      if (diccionario[j] + diccionario[i] === palabraADescomponer) {
        return [diccionario[j], diccionario[i]];
      }
    }
  }

  return [];
}
// console.log(descomposicion("malhumor,al,hum,humor,m,mal,malhu"));
