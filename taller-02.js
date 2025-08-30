function findMax(list) {
  let max = list[0];
  for (const item of list) {
    if (item > max) {
      max = item;
    }
  }
  return max;
}

const test = [3, 17, -1, 4, -19];
// console.log(findMax(test))

function includes(list, num) {
  for (const item of list) {
    if (num === item) {
      return true;
    }
  }
  return false;
}

// console.log(includes(test, 4))

function sum(list) {
  let total = 0;
  for (const item of list) {
    total += item;
  }
  return total;
}

// console.log(sum(test));

const test2 = [7, 2, 4, 6, 3, 9];

function missingNumbers(list) {
  let faltantes = [];
  let temp;
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }

  let c = 0;
  for (let i = list[0]; i <= list[list.length - 1]; i++) {
    if (list[c] !== i) {
      faltantes.push(i);
    } else {
      c++;
    }
  }
  return faltantes;
}

// console.log(missingNumbers(test2));

