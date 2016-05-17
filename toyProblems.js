function FirstFactorial(num) {
  for (var i = num - 1; i >== 0; i--) {
    num *= i;
  }
  return num;
}

funciton(obj) {
  for (var prop in obj) {
    obj[prop];
  }
}

function bog(string) {
  return string.split("").reverse().join("");
}
console.log(bog("taylor"));
