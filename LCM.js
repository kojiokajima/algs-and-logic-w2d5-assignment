// find the lowest common multiple of two given numbers

const lcm = function(a, b) {
  // your code here

  const getGcd = function(a, b) {
    newA = a >= b ? a : b;
    newB = a > b ? b : a;
    while (newA != 0 && newB != 0) {
      remainder = newA % newB;
      newA = newB;
      newB = remainder;
    }
    return newA === 0 ? newB : newA;
  }

  let result = getGcd(a, b) * (a / getGcd(a, b)) * (b / getGcd(a, b));

  return result;
}

console.log(lcm(18, 42));