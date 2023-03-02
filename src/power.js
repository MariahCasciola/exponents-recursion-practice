/**
 * Return base raised to the power exponent.
 * @throws Error if exponent is negative
 * @param {integer} base an integer
 * @param {integer} exponent a non-negative integer
 */

/*given two integers a and b
b not negative   Math.sign(exponent) returns 1 or neg 1
a raised to the power of b  Math.pow(base, exponent)
multiplied by itself b times
a is called base
b is called the exponent
*/
function power(base, exponent) {
  // top down
  if (Math.sign(exponent) === -1) {
    throw Error("exponent should be >= 0");
  }

  //   base phase
  if (exponent === 0) {
    return 1;
  }

  // Math.pow(base, exponent);
  // recursive phase
  return base * power(base, exponent - 1);
}

console.log(power(5, 5));
//return 3,125
console.log(power(5, 2));
//return 25
console.log(power(10, 2));
// return 100
module.exports = power;
