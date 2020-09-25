// generate a list of prime numbers from 2 up to a value, n
// you can use the Sieve of Eratosthenes method to do this. 

const primeGenerator = function(n) {
// your code here

// not sure I can use this
  // array = [...Array(n - 1)].map((_, i) => i + 2);

// insted of the above
  array = [];
  for (let i = 2; i <= n; i++ ) {
    array.push(i);
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = i; j <= n; j++) {
      if (array[j] % i === 0) {
        array[j] = 0;
      }
    }
  }

  primeArray = array.filter(num => num != 0);

  return primeArray;
}

console.log(primeGenerator(100));