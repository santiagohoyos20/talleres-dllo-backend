function binarySearch(list, n){
  if (list.length === 0) return null;
  let half = Math.floor(list.length / 2)
  if (n === list[half]){
    return list[half]
  } else if (n < list[half]){
    return binarySearch(list.slice(0, half), n)
  } else {
    return binarySearch(list.slice(half+1,list.length), n)
  }
}
//funcion palindromo
function isPalindrome(str) {
  let cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversed = cleaned.split("").reverse().join("");
  console.log(cleaned, reversed);
  return cleaned === reversed;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false