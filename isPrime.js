// check if a given number is prime. return true or false. 

const isPrime = function(num) {
  // your code here

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {

    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

console.log(isPrime(17));