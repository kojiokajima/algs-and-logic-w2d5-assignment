// find the greatest common divisor of the two numbers given

const gcd = function(a, b) {
  // your code here
  
  newA = a >= b ? a : b;
  newB = a > b ? b : a;

  while (newA != 0 && newB != 0) {
    remainder = newA % newB;
    newA = newB;
    newB = remainder;
  }

  return newA === 0 ? newB : newA;
}

console.log(gcd(120, 12));
